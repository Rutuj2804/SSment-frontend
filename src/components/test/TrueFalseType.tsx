import React, { useEffect, useState } from "react";
import { Button, Checkbox, Input, OutlineButton, Select } from "../../library";
import { ChevronLeftRounded, DeleteRounded, DoneRounded } from "@mui/icons-material";
import { QuestionType } from "../popup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setDeleteConfirmation, setQuestion } from "../../store/layout/slice";
import { createQuestion, deleteQuestion, updateQuestion } from "../../store/actions";

const options = [
	{ name: "True", value: "true" },
	{ name: "False", value: "false" },
];

interface TrueFalseTypeCProps {
	onChange: (i: number) => void;
}

const TrueFalseType = ({ onChange }: TrueFalseTypeCProps) => {
	const [formData, setFormData] = useState({
		title: "",
		points: "",
		yesNoTrueFalseAnswer: "true",
	});

	const [referenceImage, setReferenceImage] = useState(false);

	const [isEditMode, setIsEditMode] = useState(false);

	const dispatch = useDispatch<any>();

	const question = useSelector((state: RootState) => state.layout.question);

	const questionType = 6;

	useEffect(() => {
		if (question.questionId?._id) setIsEditMode(true);
		else setIsEditMode(false);
	}, [question]);

	useEffect(() => {
		if (isEditMode) {
			setFormData({
				title: question.questionId?.title!,
				points: question.questionId?.points?.toString()!,
				yesNoTrueFalseAnswer:
					question.questionId?.yesNoTrueFalseAnswer! ? "true" : "false",
			});
		}
	}, [isEditMode, question]);

	const close = () =>
		dispatch(
			setQuestion({
				isActive: false,
				testId: "",
				sectionId: "",
				questionId: {},
			})
		);

	const onFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
	};

	const onSubmit = () => {
		if(isEditMode) {
			dispatch(
				updateQuestion({
					...formData,
					points: parseInt(formData.points),
					questionType,
					addReferenceImage: referenceImage,
					testId: question.testId!,
					questionId: question.questionId?._id!,
					yesNoTrueFalseAnswer: formData.yesNoTrueFalseAnswer === "true" ? true : false,
					sectionId: question.sectionId!
				})
			);
		} else {
			dispatch(
				createQuestion({
					...formData,
					points: parseInt(formData.points),
					questionType,
					addReferenceImage: referenceImage,
					testId: question.testId!,
					yesNoTrueFalseAnswer: formData.yesNoTrueFalseAnswer === "true" ? true : false,
					sectionId: question.sectionId!
				})
			);
		}
		close();
	};

	const onDelete = () => {
		close();
		dispatch(
			setDeleteConfirmation({
				isActive: true,
				callback: () =>
					dispatch(
						deleteQuestion({
							questionId: question.questionId?._id!,
						})
					),
				text: "This action is irreversible. Are you sure you want to delete this question?",
			})
		);
	};

	return (
		<div className="shortAnswer__Wrapper">
			<div className="header">
				<h5>True/False Type Question</h5>
				<div className="right">
					{isEditMode ? (
						<OutlineButton
							onClick={onDelete}
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
					onChange={onFormDataChange}
					value={formData.title}
					required
				/>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-12">
						<Input
							type="number"
							name="points"
							placeholder="Points"
							label="Points"
							onChange={onFormDataChange}
							value={formData.points}
							required
							min={0}
						/>
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						<Select
							name="name"
							value="value"
							label="Answer"
							options={options}
							onChange={(c) =>
								setFormData((f) => ({
									...f,
									yesNoTrueFalseAnswer: c,
								}))
							}
							selected={formData.yesNoTrueFalseAnswer}
						/>
					</div>
				</div>
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

export default TrueFalseType;
