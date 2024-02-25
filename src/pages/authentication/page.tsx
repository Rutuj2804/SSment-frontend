import React, { useState } from "react";
import { Logo } from "../../common/logo";
import { Button, Input } from "../../library";
import { useNavigate } from "react-router-dom";
import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [seePassword, setSeePassword] = useState(false);

	const { email, password } = formData;

	const navigate = useNavigate();

	const dispatch = useDispatch<any>();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(login({ ...formData, navigate }))
		setFormData((v) => ({ email: "", password: "" }));
	};

	return (
		<div className="login__Wrapper">
			<div className="login__Form">
				<div className="login__SpaceBox">
					<div className="login__Header">
						<Logo />
						<p>Learn More</p>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="login__Title">
							<h3>Welcome Back</h3>
							<p>Login to checkout your latest feeds</p>
						</div>
						<Input
							type="email"
							value={email}
							onChange={handleChange}
							name="email"
							placeholder={"example@email.com"}
							label={"Email"}
							required
						/>
						<Input
							type={seePassword ? "text" : "password"}
							value={password}
							onChange={handleChange}
							name="password"
							placeholder={"Pa$$w0rd!"}
							label={"Password"}
							required
							endIcon={
								seePassword ? <PiEyeFill /> : <PiEyeSlashFill />
							}
							endIconClick={() => setSeePassword((t) => !t)}
						/>
						<div
							className="login__Dialouge"
							onClick={() => navigate("/forgot-password")}
						>
							<p>Forget Password?</p>
						</div>
						<div className="input__Buttons">
							<Button type="submit">Login</Button>
						</div>
					</form>
				</div>
				<div
					className="login__SecondaryDialouge"
					onClick={() => navigate("/contact-us")}
				>
					<p>
						Want to discuss a package? <span>Contact Us</span>
					</p>
				</div>
			</div>
			<div className="login__Images"></div>
		</div>
	);
};

export default Login;
