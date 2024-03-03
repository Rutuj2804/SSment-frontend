import React from "react";
import { Input, RichTextEditor } from "../../library";

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
			<RichTextEditor
				label="Description of Batch"
				name="description"
				placeholder="Description of Batch"
				value={description}
				onChange={setDescription}
			/>
		</div>
	);
};

export default BasicInformationInstitution;
