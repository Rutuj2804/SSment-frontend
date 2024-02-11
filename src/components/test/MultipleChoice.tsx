import React, { useState } from "react";
import { Button, Checkbox, Input, OutlineButton } from "../../library";
import { AddRounded, DeleteRounded, DoneRounded } from "@mui/icons-material";

type Option = {
	title: string;
	name: string;
	isCorrect: boolean;
};

const MultipleChoice = () => {
	const [options, setOptions] = useState<Option[]>([]);

	const onAddOption = () => {
		setOptions((v) => [...v, { name: "A", title: "", isCorrect: false }]);
	};

	return (
		<div className="multipleChoice__Wrapper">
			<div className="header">
				<h5>Multiple Choice Question</h5>
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
				/>
				<Input
					type="file"
					name="points"
					placeholder="Reference Image"
					label="Reference Image"
					required
					min={0}
				/>
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
									type="text"
									name="title"
									placeholder="Title"
									label="Title"
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

export default MultipleChoice;
