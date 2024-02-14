import React, { useState } from "react";
import ReactQuill, { ReactQuillProps } from "react-quill";
import "react-quill/dist/quill.snow.css";

interface RichTextEditorProps extends ReactQuillProps {
	label?: string;
	name?: string;
}

const RichTextEditor = ({ label, name, ...props }: RichTextEditorProps) => {
	return (
		<div className="textarea__Container">
			{label ? <label>{label}</label> : null}
            <div className="textarea__RichText">
			    <ReactQuill {...props} theme="snow" style={{ height: 180 }} />
            </div>
		</div>
	);
};

export default RichTextEditor;
