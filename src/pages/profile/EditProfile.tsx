import React, { useEffect } from "react";
import { Paper } from "../../components/paper";
import { Avatar } from "@mui/material";
import { Input } from "../../library";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";

const EditProfile = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Profile", "Edit Profile"],
				link: "/edit/:username",
			})
		);
	}, [dispatch]);

	return (
		<div className="profile__Wrapper">
			<Paper className="p-3">
				<h4>Edit Profile</h4>
				<div className="d-flex my-3">
					<Avatar sx={{ height: 150, width: 150 }} />
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-12">
						<Input label="First Name" placeholder="First Name" />
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						<Input label="Last Name" placeholder="Last Name" />
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
						<Input type="text" label="State" placeholder="State" />
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
			</Paper>
		</div>
	);
};

export default EditProfile;
