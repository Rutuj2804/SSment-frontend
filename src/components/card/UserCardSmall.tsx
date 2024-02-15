import { CloseRounded } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";

const UserCardSmall = () => {
	return (
		<div className="userCardSmall__Wrapper">
			<div className="userCardSmall__AvatarDiv">
				<Avatar />
                <div className="details">
				    <h6>bokaderutuj36@gmail.com</h6>
                    <p>ADMIN</p>
                </div>
			</div>
			<IconButton size="small"><CloseRounded /></IconButton>
		</div>
	);
};

export default UserCardSmall;
