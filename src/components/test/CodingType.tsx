import React, { useEffect, useState } from "react";
import { Button, Checkbox, Input, OutlineButton, RichTextEditor, Textarea } from "../../library";
import { AddRounded, ChevronLeftRounded, DeleteRounded, DoneRounded } from "@mui/icons-material";
import { QuestionType } from "../popup";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setQuestion } from "../../store/layout/slice";
import { createQuestion, updateQuestion } from "../../store/actions";
import { useAccessRole } from "../../utils/helpers";

type Option = {
	title: string;
	expectedResult: string;
};

interface CodingTypeCProps {
    onChange: (i: number) => void;
}

const CodingType = ({ onChange }: CodingTypeCProps) => {
	const [optionData, setOptionData] = useState({
		title: "",
		expectedResult: "",
	});

	const [formData, setFormData] = useState({
		title: "",
		description: "",
		points: ""
	})

	const [isEditMode, setIsEditMode] = useState(false);

	const [options, setOptions] = useState<Option[]>([]);

	const questionType = 8;

	const [referenceImage, setReferenceImage] = useState(false);

	const question = useSelector((state: RootState) => state.layout.question);

	const dispatch = useDispatch<any>();

	useEffect(() => {
		if (question.questionId?._id) setIsEditMode(true);
		else setIsEditMode(false);
	}, [question]);

	useEffect(() => {
		if (isEditMode) {
			setFormData({
				title: question.questionId?.title!,
				description: question.questionId?.description!,
				points: question.questionId?.points?.toString()!
			});
			setOptions(question.questionId?.optionId! as any)
			console.log(question.questionId?.optionId)
		}
	}, [isEditMode, question]);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

	const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setOptionData((o) => ({ ...o, [e.target.name]: e.target.value }));

	const onOptionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setOptions((o) => [...o, optionData]);
		setOptionData({
			expectedResult: "",
			title: ""
		})
	};

	const onOptionDelete = (i: number) => setOptions(o=>o.filter((_, x) => x !== i))

	const instituteId = useAccessRole()

	const close = () =>
		dispatch(
			setQuestion({
				isActive: false,
				testId: "",
				sectionId: "",
				questionId: {},
			})
		);

	const onSubmit = () => {
		if(isEditMode) {
			dispatch(updateQuestion({
				addReferenceImage: false,
				questionType,
				points: parseInt(formData.points),
				title: formData.title,
				testId: question.testId,
				sectionId: question.sectionId,
				instituteId,
				questionId: question.questionId?._id!,
				options: options,
				description: formData.description
			}))
		} else {
			dispatch(
				createQuestion({
					addReferenceImage: false,
					questionType,
					points: parseInt(formData.points),
					title: formData.title,
					testId: question.testId,
					sectionId: question.sectionId,
					instituteId,
					options: options,
					description: formData.description
				})
			);
		}
		close()
	}

	return (
		<div className="multipleChoice__Wrapper">
			<div className="header">
				<h5>Coding Type Question</h5>
				<div className="right">
					<OutlineButton onClick={() => onChange(QuestionType.SELECTQUESTION)} startIcon={<ChevronLeftRounded />}>
						Cancel
					</OutlineButton>
					<Button onClick={onSubmit} startIcon={<DoneRounded />}>Save</Button>
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
				<RichTextEditor
					name="description"
					placeholder="Description"
					label="Description"
					value={formData.description}
					onChange={c=>setFormData(f=>({ ...f, description: c }))}
				/>
				<Input 
					type="number"
					name="points"
					placeholder="Points"
					label="Points"
					required
					value={formData.points}
					onChange={onInputChange}
					min={0}
				/>
				<Checkbox
					id="add-reference-image"
					label="Add Reference Image"
					description="Displays a reference image for the question while attempting the test."
					onChange={e=>setReferenceImage(e.target.checked)}
					checked={referenceImage}
				/>
				{referenceImage && <Input
					type="file"
					name="points"
					placeholder="Reference Image"
					label="Reference Image"
					required
				/>}
			</div>
            <div className="options">
				<form onSubmit={onOptionSubmit} className="options__Wrapper">
					<div className="options__Header">
						<h5>Add Test Case</h5>
					</div>
					<div className="row">
						<div className="col-lg-6 col-md-6 col-12">
							<Input
								type="text"
								name="title"
								placeholder="Input"
								label="Input"
								value={optionData.title}
								onChange={onOptionChange}
								required
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Input
								type="text"
								name="expectedResult"
								placeholder="Expected Output"
								label="Expected Output"
								value={optionData.expectedResult}
								onChange={onOptionChange}
								required
							/>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<Button type="submit" startIcon={<AddRounded />}>
							Add Option
						</Button>
					</div>
				</form>
			</div>
			{options.map((o, i) => (
				<div key={i} className="optionCreated__Wrapper">
					<div className="testcase">
						<p><span>Input</span>: {o.title}</p>
						<p><span>Output</span>: {o.expectedResult}</p>
					</div>
					<div className="right">
						<IconButton onClick={() => onOptionDelete(i)}>
							<DeleteRounded />
						</IconButton>
					</div>
				</div>
			))}
		</div>
	);
};

export default CodingType;
