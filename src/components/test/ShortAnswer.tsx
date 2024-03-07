import React, { useEffect, useState } from "react";
import { Button, Checkbox, Input, OutlineButton } from "../../library";
import { ChevronLeftRounded, DeleteRounded, DoneRounded } from "@mui/icons-material";
import { QuestionType } from "../popup";
import { useDispatch, useSelector } from "react-redux";
import { createQuestion, deleteQuestion } from "../../store/actions";
import { RootState } from "../../store";
import { useAccessRole } from "../../utils/helpers";
import { setQuestion } from "../../store/layout/slice";
import { QuestionInterface } from "../../utils/types";

interface ShortAnswerCProps {
	onChange: (i: number) => void;
	que?: QuestionInterface;
}

const ShortAnswer = ({ onChange, que }: ShortAnswerCProps) => {
	const [formData, setFormData] = useState({
		title: "",
		points: "",
	});

	const questionType = 3;

	const [referenceImage, setReferenceImage] = useState(false);

	const dispatch = useDispatch<any>();

	const question = useSelector((state: RootState) => state.layout.question);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

	const instituteId = useAccessRole();

	useEffect(() => {
		if (que?.title || que?.points) {
			setFormData({
				title: que.title!,
				points: que.points?.toString()!,
			});
		}
	}, [que]);

	const onSubmit = () => {
		if (formData.title && formData.points) {
			dispatch(
				createQuestion({
					addReferenceImage: false,
					questionType,
					points: parseInt(formData.points),
					title: formData.title,
					testId: question.testId,
					sectionId: question.sectionId,
					instituteId,
				})
			);
			dispatch(
				setQuestion({ isActive: false, testId: "", sectionId: "" })
			);
		}
	};

	return (
		<div className="shortAnswer__Wrapper">
			<div className="header">
				<h5>Short Answer Question</h5>
				<div className="right">
					{que?.title ? (
						<OutlineButton
							onClick={dispatch(
								deleteQuestion({
									questionId: que._id!,
									instituteId,
								})
							)}
							startIcon={<DeleteRounded />}
						>
							Delete
						</OutlineButton>
					) : (
						<OutlineButton
							onClick={() =>
								onChange(QuestionType.SELECTQUESTION)
							}
							startIcon={<ChevronLeftRounded />}
						>
							Cancel
						</OutlineButton>
					)}
					<Button onClick={onSubmit} startIcon={<DoneRounded />}>
						Save
					</Button>
				</div>
			</div>
			<div className="body">
				<Input
					type="text"
					name="title"
					placeholder="Title"
					label="Title"
					value={formData.title}
					onChange={onInputChange}
					required
				/>
				<Input
					type="number"
					name="points"
					placeholder="Points"
					label="Points"
					value={formData.points}
					onChange={onInputChange}
					required
					min={0}
				/>
				<Checkbox
					id="add-reference-image"
					label="Add Reference Image"
					description="Displays a reference image for the question while attempting the test."
					onChange={(e) => setReferenceImage(e.target.checked)}
					checked={referenceImage}
				/>
				{referenceImage && (
					<Input
						type="file"
						name="points"
						placeholder="Reference Image"
						label="Reference Image"
						required
					/>
				)}
			</div>
		</div>
	);
};

export default ShortAnswer;
