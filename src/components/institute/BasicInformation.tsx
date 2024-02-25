import React from "react";
import { Input, RichTextEditor } from "../../library";

interface BasicInformationCProps {
	name: string;
	setName: Function;
	description: string;
	setDescription: Function;
}

const BasicInformation = ({
	name,
	setName,
	description,
	setDescription,
}: BasicInformationCProps) => {
	return (
		<div>
			<Input
				label="Title *"
				placeholder="Title"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<RichTextEditor
				label="Description "
				onChange={(s) => setDescription(s)}
				value={description}
				placeholder="Description"
			/>
		</div>
	);
};

export default BasicInformation;
