import React, { useState } from "react";
import { Button, Checkbox, Input, OutlineButton, Textarea } from "../../library";
import { AddRounded, DeleteRounded, DoneRounded } from "@mui/icons-material";

type Option = {
	title: string;
	name: string;
	isCorrect: boolean;
};

const CodingType = () => {
	const [options, setOptions] = useState<Option[]>([]);
	
	const [referenceImage, setReferenceImage] = useState(false)

    const onAddOption = () => {
		setOptions((v) => [...v, { name: "A", title: "", isCorrect: false }]);
	};

	return (
		<div className="multipleChoice__Wrapper">
			<div className="header">
				<h5>Coding Type Question</h5>
				<div className="right">
					<OutlineButton startIcon={<DeleteRounded />}>
						Delete
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
				<Textarea
					name="description"
					placeholder="Description"
					label="Description"
					required
                    rows={5}
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
							<h6>Test Case {i + 1}</h6>
							<Button>Remove</Button>
						</div>
						<div className="row">
							<div className="col-lg-6 col-md-6 col-12">
								<Input
									type="text"
									name="input"
									placeholder="Your Input"
									label="Your Input"
									required
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-12">
								<Input
									type="text"
									name="output"
									placeholder="Expected Output"
									label="Expected Output"
									required
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CodingType;
