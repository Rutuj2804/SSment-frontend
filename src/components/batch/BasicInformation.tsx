import React from "react";
import { Input, Textarea } from "../../library";
import { CreateBatchFormData } from "../../pages/batch";

interface BasicInformationProps {
	formData: CreateBatchFormData;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
}

const BasicInformation = ({ formData, onChange }: BasicInformationProps) => {
	return (
		<div>
			<Input
				label="Title of Batch"
				name="title"
				placeholder="Batch Awesome"
				value={formData.title}
				onChange={onChange}
			/>
			<Textarea
				label="Description of Batch"
				name="description"
				placeholder="Description of Batch"
				rows={6}
				value={formData.description}
				onChange={onChange}
			/>
		</div>
	);
};

export default BasicInformation;
