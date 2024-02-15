import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Button, Input } from "../../library";
import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi";
import { LockRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
	const [seePassword, setSeePassword] = useState(false);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Profile", "Reset Password"],
				link: "/reset-password",
			})
		);
	}, [dispatch]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		console.log("here 1")
		e.preventDefault();
		navigate("/login");
	};

	return (
		<div>
			<Paper className="p-3">
				<h4>Reset Password</h4>
				<form onSubmit={onSubmit}>
					<Input
						type={seePassword ? "text" : "password"}
						label="Current Password"
						placeholder="Current Password"
						endIcon={
							seePassword ? <PiEyeFill /> : <PiEyeSlashFill />
						}
						endIconClick={() => setSeePassword((t) => !t)}
					/>
					<Input
						type={seePassword ? "text" : "password"}
						label="New Password"
						placeholder="New Password"
						endIcon={
							seePassword ? <PiEyeFill /> : <PiEyeSlashFill />
						}
						endIconClick={() => setSeePassword((t) => !t)}
					/>
					<Input
						type={seePassword ? "text" : "password"}
						label="Confirm Password"
						placeholder="Confirm Password"
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
