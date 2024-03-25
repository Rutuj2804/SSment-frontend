import React, { useState } from "react";
import {
	Button,
	Checkbox,
	FileUpload,
	Input,
	OutlineButton,
} from "../../library";
import {
	AddRounded,
	ChevronLeftRounded,
	DoneRounded,
} from "@mui/icons-material";
import { QuestionType } from "../popup";

type Option = {
	title: string;
	name: string;
	isCorrect: boolean;
};

interface ImageChoiceCProps {
	onChange: (i: number) => void;
}

const ImageChoice = ({ onChange }: ImageChoiceCProps) => {
	const [options, setOptions] = useState<Option[]>([]);
	const [referenceImageFile, setReferenceImageFile] = useState<null | File>(
		null
	);

	const questionType = 2;

	const [referenceImage, setReferenceImage] = useState(false);

	const onAddOption = () => {
		setOptions((v) => [...v, { name: "A", title: "", isCorrect: false }]);
	};

	return (
		<div className="multipleChoice__Wrapper">
			<div className="header">
				<h5>Image Choice Question</h5>
				<div className="right">
					<OutlineButton
						onClick={() => onChange(QuestionType.SELECTQUESTION)}
						startIcon={<ChevronLeftRounded />}
					>
						Cancel
					</OutlineButton>
					<Button startIcon={<DoneRounded />}>Save</Button>
				</div>
			</div>
			<div className="body">
				<Input
					type="text"
					name="title"
					placeholder="Title"
					label="Title"
					required
				/>
				<Input
					type="number"
					name="points"
					placeholder="Points"
					label="Points"
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
				<div
					className="multipleChoice__AddOption"
					onClick={onAddOption}
				>
					<AddRounded style={{ height: 30, width: 30 }} />
					<h5>Add Option</h5>
				</div>
			</div>
			{options.length ? <hr /> : null}
			<div className="options">
				{options.map((v, i) => (
					<div className="options__Wrapper" key={i}>
						<div className="options__Header">
							<h6>Option {i + 1}</h6>
							<Button>Remove</Button>
						</div>
						<div className="row">
							<div className="col-lg-8 col-md-8 col-12">
								<Input
									type="file"
									name="image"
									placeholder="Image"
									label="Image"
									required
								/>
							</div>
							<div className="col-lg-4 col-md-4 col-12">
								<Input
									type="text"
									name="label"
									placeholder="Label"
									label="Label"
									required
								/>
							</div>
						</div>
						<Checkbox label="This is correct option" />
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageChoice;
