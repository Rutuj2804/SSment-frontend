import React, { useEffect, useState } from "react";
import {
	Button,
	Checkbox,
	FileUpload,
	Input,
	OutlineButton,
} from "../../library";
import {
	ChevronLeftRounded,
	DeleteRounded,
	DoneRounded,
} from "@mui/icons-material";
import { QuestionType } from "../popup";
import { useDispatch, useSelector } from "react-redux";
import {
	createQuestion,
	deleteQuestion,
	updateQuestion,
} from "../../store/actions";
import { RootState } from "../../store";
import { setDeleteConfirmation, setQuestion } from "../../store/layout/slice";

interface ShortAnswerCProps {
	onChange: (i: number) => void;
}

const ShortAnswer = ({ onChange }: ShortAnswerCProps) => {
	const [formData, setFormData] = useState({
		title: "",
		points: "",
	});

	const [isEditMode, setIsEditMode] = useState(false);

	const questionType = 3;

	const [referenceImage, setReferenceImage] = useState(false);
	const [referenceImageFile, setReferenceImageFile] = useState<null | File>(
		null
	);

	const dispatch = useDispatch<any>();

	const question = useSelector((state: RootState) => state.layout.question);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

	useEffect(() => {
		if (question.questionId?._id) setIsEditMode(true);
		else setIsEditMode(false);
	}, [question]);

	useEffect(() => {
		if (isEditMode) {
			setFormData({
				title: question.questionId?.title!,
				points: question.questionId?.points?.toString()!,
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

	const onSubmit = () => {
		if (formData.title && formData.points) {
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
					})
				);
			}
			close();
		}
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
				<h5>Short Answer Question</h5>
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
					<FileUpload
						file={referenceImageFile}
						onChange={(a: File[]) =>
							a.length
								? setReferenceImageFile(a[0])
								: setReferenceImageFile(null)
						}
						showPreview
					/>
				)}
			</div>
		</div>
	);
};

export default ShortAnswer;
