import { Avatar } from "@mui/material"
import React from "react"
import { Button, OutlineButton } from "../../library"

const Student = () => {
	return (
		<div className="student__Wrapper">
			<div className="left">
				<Avatar />
				<div className="userdetails">
					<h6>Rutuj Jeevan Bokade</h6>
					<p>bokaderutuj36@gmail.com</p>
				</div>
			</div>
			<div className="right">
				<OutlineButton>View Profile</OutlineButton>
				<Button>View Responses</Button>
				<span></span>
				<h4 className="pass">64%</h4>
			</div>
		</div>
	)
}

export default Student