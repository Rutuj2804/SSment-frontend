import React from "react";
import { Input, Textarea } from "../../library";

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
			<Textarea
				label="Description "
				onChange={(e) => setDescription(e.target.value)}
				value={description}
				rows={5}
				placeholder="Description"
			/>
		</div>
	);
};

export default BasicInformation;
