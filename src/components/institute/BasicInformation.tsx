import React from "react";
import { Input, RichTextEditor } from "../../library";

const BasicInformation = () => {
	return (
		<div>
			<Input label="Title *" placeholder="Title" />
			<RichTextEditor label="Description *" placeholder="Description" />
		</div>
	);
};

export default BasicInformation;
