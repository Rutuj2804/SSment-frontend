import { Avatar } from "@mui/material";
import React from "react";
import { Button, OutlineButton } from "../../library";
import { useNavigate } from "react-router-dom";

const Test = () => {

    const navigate = useNavigate()

	return (
        <div className="student__Wrapper">
			<div className="left">
				<Avatar />
				<div className="userdetails">
					<h6>Test Awesome</h6>
					<p>12 Jan, 2024 | 11:00 AM IST</p>
				</div>
			</div>
			<div className="right">
				<OutlineButton onClick={() => navigate('/test/123')}>View Test</OutlineButton>
				<Button onClick={() => navigate('/results')}>View Results</Button>
			</div>
		</div>
    );
};

export default Test;
