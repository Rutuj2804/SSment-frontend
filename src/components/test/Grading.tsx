import React, { useState } from "react";
import { Button, Checkbox, Input } from "../../library";
import { CreateTestFormDataInterface, Grades } from "../../pages/test";
import {
	AddRounded,
	CloseRounded,
	DangerousRounded,
	PercentRounded,
	WarningRounded,
} from "@mui/icons-material";

interface GradingProps {
	formData: CreateTestFormDataInterface;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	onCheckboxChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		c: boolean
	) => void;
	setGrades: Function;
	grades: Grades[];
}

const Grading = ({
	formData,
	onChange,
	onCheckboxChange,
	grades,
	setGrades,
}: GradingProps) => {
	const [formDataGrading, setFormDataGrading] = useState({
		start: "",
		end: "",
		grade: "",
	});

	const [error, setError] = useState("");

	const { start, end, grade } = formDataGrading;

	const onGradingDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormDataGrading((f) => ({ ...f, [e.target.name]: e.target.value }));
	};

	const onSubmit = () => {
		var s = parseFloat(start),
			e = parseFloat(end);

		setError("");
		if (s > -1 && e > -1 && grade !== "") {
			if (s > e) {
				setError(
					"Start value cannnot be greater than end value. Try reversing the values."
				);
				return;
			} else {
				setGrades((g: Grades[]) => [...g, { start, end, grade }]);
				setFormDataGrading({
					start: "",
					end: "",
					grade: "",
				});
			}
		} else setError("Please add valid start, end and grade values.");
	};

	const removeGrade = (i: number) => {
		setGrades((g: Grades[]) => g.filter((_, j) => j !== i));
	};

	return (
		<div className="row">
			<div className="col-lg-6 col-md-6 col-12">
				<Checkbox
					name="enableGrading"
					id="enableGrading"
					label="Enable Grading"
					description="Allows to automatically grade students based on their scored points."
					onChange={onCheckboxChange}
					checked={formData.enableGrading}
				/>
			</div>
			{formData.enableGrading && (
				<>
					<div className="col-lg-6 col-md-6 col-12">
						<Checkbox
							name="releaseGradesOnceCompleted"
							id="releaseGradesOnceCompleted"
							label="Release grades once test is completed."
							description="Lets students know their grades."
							onChange={onCheckboxChange}
							checked={formData.releaseGradesOnceCompleted}
						/>
					</div>
					<div className="layoutMessage__Message layoutMessage__Warning">
						<WarningRounded />
						<p>Please ensure appropriate grading before proceeding.</p>
					</div>
					<div className="d-flex justify-content-between my-2">
						<h5>Grades</h5>
						<p>{grades.length} grades added</p>
					</div>
					{grades.map((g, i) => (
						<div className="row" key={i}>
							<div className="col-lg-3 col-md-3 col-12">
								<Input
									type="number"
									label="Start"
									endIcon={<PercentRounded />}
									value={g.start}
								/>
							</div>
							<div className="col-lg-3 col-md-3 col-12">
								<Input
									type="number"
									label="End"
									endIcon={<PercentRounded />}
									value={g.end}
								/>
							</div>
							<div className="col-lg-3 col-md-3 col-12">
								<Input
									type="text"
									label="Grade"
									value={g.grade}
								/>
							</div>
							<div className="col-lg-3 col-md-3 col-12 mt-4">
								<Button
									onClick={() => removeGrade(i)}
									className="customButton__Danger"
									startIcon={<CloseRounded />}
								>
									Remove
								</Button>
							</div>
						</div>
					))}
					<div className="row">
						<div className="col-lg-3 col-md-3 col-12">
							<Input
								type="number"
								label="Start *"
								endIcon={<PercentRounded />}
								placeholder="0"
								name="start"
								value={start}
								onChange={onGradingDataChange}
							/>
						</div>
						<div className="col-lg-3 col-md-3 col-12">
							<Input
								type="number"
								label="End *"
								endIcon={<PercentRounded />}
								placeholder="100"
								name="end"
								value={end}
								onChange={onGradingDataChange}
							/>
						</div>
						<div className="col-lg-3 col-md-3 col-12">
							<Input
								type="text"
								label="Grade"
								placeholder="A"
								name="grade"
								value={grade}
								onChange={onGradingDataChange}
							/>
						</div>
						<div className="col-lg-3 col-md-3 col-12 mt-4">
							<Button
								onClick={onSubmit}
								startIcon={<AddRounded />}
							>
								Add Grading
							</Button>
						</div>
					</div>
				</>
			)}
			{error ? (
				<div className="layoutMessage__Message layoutMessage__Danger mt-3">
					<DangerousRounded />
					<p>{error}</p>
				</div>
			) : null}
		</div>
	);
};

export default Grading;
