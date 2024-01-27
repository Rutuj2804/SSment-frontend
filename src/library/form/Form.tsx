import React, { useState } from "react";
import { Button, Input } from "../ui";

export interface FormProps {
    fields: FieldProps[];
    submitButtonText: string;
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    colLg?: number;
    colMd?: number;
    colSm?: number;
    label?: string;
}

const Form = (props: FormProps) => {
    const [formData, setFormData] = useState<Record<string, any>>({});

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="incoode__Form-Wrapper">
            <form onSubmit={onSubmit}>
                <div className="row">
                    {props.fields.map(({ colLg, colMd, colSm, ...f }, i) => {
                        if (f.type === "text" || f.type === "password" || f.type === "email") {
                            return (
                                <div
                                    key={i}
                                    className={`col-lg-${colLg} col-md-${colMd} col-sm-${colSm} mb-2`}
                                >
                                    <Input {...f} onChange={onChange} />
                                </div>
                            );
                        }
                    })}
                </div>
                <div className="incoode__Form-Button">
                    <Button type="submit">Login</Button>
                </div>
            </form>
        </div>
    );
};

export default Form;
