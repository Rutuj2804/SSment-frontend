import React, { useState } from "react";
import { Button, Input, Textarea } from "../../library";
import { Logo } from "../../common/logo";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		message: "",
	});

	const { firstname, lastname, email, message } = formData;

	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className="contactUs__Wrapper">
			<div className="contactUs__Form">
				<div className="contactUs__SpaceBox">
					<div className="contactUs__Header">
						<Logo />
						<p>Learn More</p>
					</div>
					<form className="contactUs" onSubmit={handleSubmit}>
						<div className="contactUs__Title">
							<h3>Welcome On Board</h3>
							<p>Contact Us to start your journey</p>
						</div>
						<Input
							type="text"
							value={firstname}
							onChange={handleChange}
							name="firstname"
							placeholder={"First Name"}
							label={"First Name"}
							required
						/>
						<Input
							type="text"
							value={lastname}
							onChange={handleChange}
							name="lastname"
							placeholder={"Last Name"}
							label={"Last Name"}
							required
						/>
						<Input
							type="email"
							value={email}
							onChange={handleChange}
							name="email"
							placeholder={"Email"}
							label={"Email"}
							required
						/>
						<Textarea
							value={message}
							onChange={handleChange}
							name="message"
							placeholder={"Message..."}
							label={"Message"}
							rows={5}
						/>
						<div className="contactUs__Dialouge">
							<p>Terms and Conditions</p>
						</div>
						<div className="input__Buttons">
							<Button type="submit">Contact Us</Button>
						</div>
					</form>
				</div>
				<div
					className="contactUs__SecondaryDialouge"
					onClick={() => navigate("/login")}
				>
					<p>
						Already have a account? <span>Login Now</span>
					</p>
				</div>
			</div>
			<div className="login__Images"></div>
		</div>
	);
};

export default ContactUs;
