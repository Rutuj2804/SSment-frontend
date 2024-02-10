import { Checkbox, CheckboxProps } from "@mui/material";

interface CustomCheckboxCP extends CheckboxProps {
    description?: string;
    className?: string;
    id?:string;
    label?: string;
}

const CustomCheckbox = ({ label, id, description, className, ...props }: CustomCheckboxCP) => {
    return (
        <div className={`customCheckbox__Wrapper ${className}`}>
            <div className="top">
                <Checkbox id={id} {...props} />
                {label ? <label htmlFor={id}>{label}</label> : null}
            </div>
            {description ? <span>{description}</span> : null}
        </div>
    );
};

export default CustomCheckbox;
