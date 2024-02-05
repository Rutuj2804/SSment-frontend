import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    startIcon?: React.ReactNode;
    startIconClick?: () => void;
    endIcon?: React.ReactNode;
    endIconClick?: () => void;
}

const Input = ({ className, label, startIcon, startIconClick, endIcon, endIconClick, ...props }: InputProps) => {
    return (
        <div className="input__Container">
            {label ? <label>{label}</label> : null}
            <div className={`input__Wrapper`}>
                {startIcon ? <div className="input__StartIcon" onClick={startIconClick}>{startIcon}</div> : null}
                <input
                    {...props}
                />
                {endIcon ? <div className="input__EndIcon" onClick={endIconClick}>{endIcon}</div> : null}
            </div>
        </div>
    );
};

export default Input;
