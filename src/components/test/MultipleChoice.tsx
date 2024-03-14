import React, { useEffect, useState } from "react";
import { Button, Checkbox, Input, OutlineButton } from "../../library";
import {
	AddRounded,
	ChevronLeftRounded,
	DeleteRounded,
	DoneRounded,
} from "@mui/icons-material";
import { QuestionType } from "../popup";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
	createQuestion,
	deleteQuestion,
	updateQuestion,
} from "../../store/actions";
import { setDeleteConfirmation, setQuestion } from "../../store/layout/slice";

type Option = {
	title: string;
	bullet: string;
	isCorrectAnswer: boolean;
};

interface MultipleChoiceCProps {
	onChange: (i: number) => void;
}

const MultipleChoice = ({ onChange }: MultipleChoiceCProps) => {
	const [optionData, setOptionData] = useState({
		title: "",
		bullet: "",
		isCorrectAnswer: false,
	});

	const [formData, setFormData] = useState({
		title: "",
		description: "",
		points: "",
	});

	const [isEditMode, setIsEditMode] = useState(false);

	const [options, setOptions] = useState<Option[]>([]);

	const questionType = 1;

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
				points: question.questionId?.points?.toString()!,
			});
			setOptions(question.questionId?.optionId! as any);
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
			bullet: "",
			isCorrectAnswer: false,
			title: ""
		})
	};

	const onOptionDelete = (i: number) =>
		setOptions((o) => o.filter((_, x) => x !== i));

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
		if (isEditMode) {
			dispatch(
				updateQuestion({
					addReferenceImage: false,
					questionType,
					points: parseInt(formData.points),
					title: formData.title,
					testId: question.testId,
					sectionId: question.sectionId,
					questionId: question.questionId?._id!,
					options: options,
					description: formData.description,
				})
			);
		} else {
			dispatch(
				createQuestion({
					addReferenceImage: false,
					questionType,
					points: parseInt(formData.points),
					title: formData.title,
					testId: question.testId,
					sectionId: question.sectionId,
					options: options,
					description: formData.description,
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
		<div className="multipleChoice__Wrapper">
			<div className="header">
				<h5>Multiple Choice Question</h5>
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
			<div className="options">
				<form onSubmit={onOptionSubmit} className="options__Wrapper">
					<div className="options__Header">
						<h5>Add Option</h5>
					</div>
					<div className="row">
						<div className="col-lg-8 col-md-8 col-12">
							<Input
								type="text"
								name="title"
								placeholder="Title"
								label="Title"
								value={optionData.title}
								onChange={onOptionChange}
								required
							/>
						</div>
						<div className="col-lg-4 col-md-4 col-12">
							<Input
								type="text"
								name="bullet"
								placeholder="Label"
								label="Label"
								value={optionData.bullet}
								onChange={onOptionChange}
								required
							/>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<Checkbox
							onChange={(e) =>
								setOptionData((o) => ({
									...o,
									isCorrectAnswer: e.target.checked,
								}))
							}
							checked={optionData.isCorrectAnswer}
							className="mb-0"
							label="This is correct option"
						/>
						<Button type="submit" startIcon={<AddRounded />}>
							Add Option
						</Button>
					</div>
				</form>
			</div>
			{options.map((o, i) => (
				<div
					key={i}
					className={
						o.isCorrectAnswer
							? "optionCreated__Wrapper optionCreated__CorrectOption"
							: "optionCreated__Wrapper"
					}
				>
					<div className="left">
						<h6>{o.bullet}&nbsp;&#41;</h6>
						<p>{o.title}</p>
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

export default MultipleChoice;
