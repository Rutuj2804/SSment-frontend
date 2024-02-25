import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Button, Input } from "../../library";
import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../store/actions";

const ResetPassword = () => {

	const [formData, setFormData] = useState({
		password: "",
		cpassword: "",
	})

	const [seePassword, setSeePassword] = useState(false);

	const { password, cpassword } = formData

	const dispatch = useDispatch<any>();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Profile", "Reset Password"],
				link: "/reset-password",
			})
		);
	}, [dispatch]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData(f=>({ ...f, [e.target.name]: e.target.value }))

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(resetPassword({ ...formData, navigate }))
	};

	return (
		<div>
			<Paper className="p-3">
				<h4>Reset Password</h4>
				<form onSubmit={onSubmit}>
					<Input
						type={seePassword ? "text" : "password"}
						label="New Password"
						placeholder="New Password"
						value={password}
						name="password"
						onChange={onChange}
						endIcon={
							seePassword ? <PiEyeFill /> : <PiEyeSlashFill />
						}
						endIconClick={() => setSeePassword((t) => !t)}
					/>
					<Input
						type={seePassword ? "text" : "password"}
						label="Confirm Password"
						placeholder="Confirm Password"
						value={cpassword}
						name="cpassword"
						onChange={onChange}
						endIcon={
							seePassword ? <PiEyeFill /> : <PiEyeSlashFill />
						}
						endIconClick={() => setSeePassword((t) => !t)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Paper>
		</div>
	);
};

export default ResetPassword;
