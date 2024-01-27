import { Form, FormProps } from "../../library/form";

const formDataJSON: FormProps = {
    submitButtonText: "Login",
    fields: [
        {
            type: "email",
            name: "email",
            placeholder: "Email",
            label: "Email",
            required: true,
            autoFocus: true,
        },
        {
            type: "password",
            name: "password",
            placeholder: "Password",
            label: "Password",
            required: true,
            autoFocus: false,
        },
    ],
};

const Login = () => {
    const onSubmit = () => {}

    return (
        <div className="incoode__Login-Wrapper">
            <div className="incoode__Login-Authentication-Box">
                <Form {...formDataJSON} />
            </div>
        </div>
    );
};

export default Login;
