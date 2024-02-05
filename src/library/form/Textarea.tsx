import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

const Textarea = ({ label, ...props }:TextareaProps) => {
	return (
        <div className="textarea__Container">
            {label ? <label>{label}</label> : null}
            <div className={`textarea__Wrapper`}>
                <textarea
                    {...props}
                ></textarea>
            </div>
        </div>
    );
};

export default Textarea;
