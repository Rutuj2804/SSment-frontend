import React, { useState } from "react";
import { Button, Checkbox, Input, OutlineButton } from "../../library";
import { ChevronLeftRounded, DoneRounded } from "@mui/icons-material";
import { QuestionType } from "../popup";

interface LongAnswerCProps {
    onChange: (i: number) => void;
}

const LongAnswer = ({ onChange }: LongAnswerCProps) => {
	
	const [referenceImage, setReferenceImage] = useState(false)

	return (
		<div className="shortAnswer__Wrapper">
			<div className="header">
				<h5>Long Answer Question</h5>
				<div className="right">
					<OutlineButton onClick={() => onChange(QuestionType.SELECTQUESTION)} startIcon={<ChevronLeftRounded />}>
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
		</div>
	);
};

export default LongAnswer;
