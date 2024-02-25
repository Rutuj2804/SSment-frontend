import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { Avatar } from "@mui/material";
import { Button, Input } from "../../library";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { updateUserDetails } from "../../store/actions";

const EditProfile = () => {
	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		midname: "",
	});

	const { firstname, lastname, midname } = formData;

	const dispatch = useDispatch<any>();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Profile", "Edit Profile"],
				link: "/edit/:username",
			})
		);
	}, [dispatch]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(updateUserDetails(formData))
	};

	return (
		<div className="profile__Wrapper">
			<Paper className="p-3">
				<h4>Edit Profile</h4>
				<div className="d-flex my-3">
					<Avatar sx={{ height: 150, width: 150 }} />
				</div>
				<form onSubmit={onSubmit}>
					<div className="row">
						<div className="col-lg-6 col-md-6 col-12">
							<Input
								label="First Name"
								placeholder="First Name"
								value={firstname}
								name="firstname"
								onChange={onChange}
								required
								autoFocus
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Input
								label="Mid Name"
								placeholder="Mid Name"
								value={midname}
								name="midname"
								onChange={onChange}
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Input
								label="Last Name"
								placeholder="Last Name"
								value={lastname}
								name="lastname"
								onChange={onChange}
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Input label="Email" placeholder="Email" />
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Input
								type="date"
								label="Date of Birth"
								placeholder="Date of Birth"
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Input
								type="text"
								label="State"
								placeholder="State"
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Input
								type="text"
								label="Country"
								placeholder="Country"
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Input
								label="Institute"
								placeholder="Institute"
								disabled
							/>
						</div>
					</div>
					<div className="d-flex justify-content-end">
						<Button type="submit">Update Profile</Button>
					</div>
				</form>
			</Paper>
		</div>
	);
};

export default EditProfile;
