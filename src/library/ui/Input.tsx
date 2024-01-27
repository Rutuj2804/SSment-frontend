import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input = ({ className, label, ...props }: InputProps) => {
    return (
        <div className="incoode__Input-Wrapper">
            <label>{label}</label>
            <input className={`${className} incoode__Input-Input`} {...props} />
        </div>
    );
};

export default Input;
