import { Avatar } from "@mui/material"
import React from "react"
import { Button, OutlineButton } from "../../library"
import { UserInterface } from "../../utils/types"
import { username } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

interface StudentCProps {
	user: UserInterface;
	parent: string;
}

const Student = ({ user, parent }: StudentCProps) => {

	const navigate = useNavigate()

	return (
		<div className="student__Wrapper">
			<div className="left">
				<Avatar />
				<div className="userdetails">
					<h6>{username(user)}</h6>
					<p>{user.email}</p>
				</div>
			</div>
			<div className="right">
				<OutlineButton onClick={() => navigate(`/${user.email}`)}>View Profile</OutlineButton>
				{parent === "TEST" && <Button>View Responses</Button>}
				<span></span>
				{parent === "TEST" && <h4 className="pass">64%</h4>}
			</div>
		</div>
	)
}

export default Student