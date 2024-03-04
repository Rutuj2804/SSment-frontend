import React from "react";
import { Input, RichTextEditor, Textarea } from "../../library";

interface BasicInformationProps {
	title: string;
	description: string;
	setTitle: any;
	setDescription: any;
}

const BasicInformationInstitution = ({ title, description, setTitle, setDescription }: BasicInformationProps) => {
	return (
		<div>
			<Input
				label="Title of Batch"
				name="title"
				placeholder="Batch Awesome"
				value={title}
				onChange={e=>setTitle(e.target.value)}
			/>
			<Textarea
				label="Description of Batch"
				name="description"
				placeholder="Description of Batch"
				value={description}
				onChange={e=>setDescription(e.target.value)}
			/>
		</div>
	);
};

export default BasicInformationInstitution;
