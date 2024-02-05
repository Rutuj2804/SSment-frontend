import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input = ({ className, label, ...props }: InputProps) => {
    return (
        <div>Input</div>
    );
};

export default Input;
