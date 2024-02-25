import React, { useEffect } from "react";
import { Paper } from "../../components/paper";
import { Button, OutlineButton } from "../../library";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { DangerousRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { RootState } from "../../store";
import moment from "moment";
import { location, username } from "../../utils/helpers";

const Profile = () => {
	const dispatch = useDispatch();

	const user = useSelector((state: RootState) => state.profile.user)

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Profile", "My Profile"],
				link: "/:username",
			})
		);
	}, [dispatch]);

	const navigate = useNavigate();

	return (
		<div className="testDetail__Wrapper">
			<Paper className="p-3">
				<div className="testDetail__Header">
					<div className="left">
						<Avatar sx={{ height: 150, width: 150 }} />
						<div className="details">
							<h4>{username(user)}</h4>
							<p>{location(user)}</p>
						</div>
					</div>
					<div className="infodetails">
						<div className="unit">
							<h6>Role</h6>
							<p>No Role Assigned</p>
						</div>
						<div className="unit">
							<h6>Date Of Birth</h6>
							<p>{moment(user.dob).format("DD MMM, yyyy")}</p>
						</div>
						<div className="unit">
							<h6>Created On</h6>
							<p>{moment(user._createdAt).format("DD MMM, yyyy")}</p>
						</div>
						<div className="unit">
							<h6>Institute</h6>
							<p>MIT ADT University</p>
						</div>
					</div>
					<div className="actions">
						<h6>Actions :</h6>
						<div className="testDetails__Actions">
							<OutlineButton>Delete Profile</OutlineButton>
							<Button onClick={() => navigate(`/edit/${user.email}`)}>
								Edit Profile
							</Button>
						</div>
					</div>
					<div className="layoutMessage__Message layoutMessage__Danger">
						<DangerousRounded />
						<p>
							You are not authorized to delete your profile.
							Please contact the Administrator for more
							information.
						</p>
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default Profile;
