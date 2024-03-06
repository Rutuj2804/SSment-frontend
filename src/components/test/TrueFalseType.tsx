import React, { useState } from "react";
import { Button, Checkbox, Input, OutlineButton, Select } from "../../library";
import { ChevronLeftRounded, DoneRounded } from "@mui/icons-material";
import { QuestionType } from "../popup";

const options = [
	{ name: "True", value: true },
	{ name: "False", value: false },
]

interface TrueFalseTypeCProps {
    onChange: (i: number) => void;
}

const TrueFalseType = ({ onChange }: TrueFalseTypeCProps) => {
	
	const [referenceImage, setReferenceImage] = useState(false)

	return (
		<div className="shortAnswer__Wrapper">
			<div className="header">
				<h5>True/False Type Question</h5>
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
				<div className="row">
					<div className="col-lg-6 col-md-6 col-12">
						<Input
							type="number"
							name="points"
							placeholder="Points"
							label="Points"
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
							selected={true}
						/>
					</div>
				</div>
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

export default TrueFalseType;
