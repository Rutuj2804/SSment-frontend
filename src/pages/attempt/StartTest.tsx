import React from "react";
import { Paper } from "../../components/paper";
import { Avatar } from "@mui/material";
import { Button } from "../../library";
import { useNavigate } from "react-router-dom";
import { DangerousRounded, PlayArrowRounded, WarningRounded } from "@mui/icons-material";

const StartTest = () => {

	const navigate = useNavigate()

	return (
		<div className="testDetail__Wrapper container mt-5">
			<Paper className="p-3">
				<div className="testDetail__Header">
					<div className="left">
						<Avatar
							variant="rounded"
							sx={{ height: 150, width: 150 }}
						/>
						<div className="details">
							<h4>Test Awesome</h4>
							<p>
								Lume is a platform and network for nursing
								professionals. Lume's goal is to become the
								trusted advisor for all of nurses' financial
								needs by bringing them access to innovative and
								intuitive products that help them eliminate debt
								to make the most of their money. Lume is a
								platform and network for nursing professionals.
								Lume's goal is to become the trusted advisor for
								all of nurses' financial needs by bringing them
								access to innovative and intuitive products that
								help them eliminate debt to make the most of
								their money.
							</p>
						</div>
					</div>
					<div className="infodetails">
						<div className="unit">
							<h6>Style</h6>
							<p>Multi Pager</p>
						</div>
						<div className="unit">
							<h6>Time</h6>
							<p>11:20 AM</p>
						</div>
						<div className="unit">
							<h6>Date</h6>
							<p>12 Jan, 2024</p>
						</div>
						<div className="unit">
							<h6>Questions</h6>
							<p>60</p>
						</div>
						<div className="unit">
							<h6>Duration</h6>
							<p>120 mins</p>
						</div>
					</div>
					<div className="actions">
						<h6>Actions :</h6>
						<div className="testDetails__Actions">
							<Button startIcon={<PlayArrowRounded />} onClick={() => navigate("/terms-and-conditions/123")}>
								Start Test
							</Button>
						</div>
					</div>
				</div>
				<div className="testDetails__Message testDetails__Warning">
					<WarningRounded />
					<p>Contact the Administrator if you are not able to see correct the test.</p>
				</div>
				<div className="testDetails__Message testDetails__Danger">
					<DangerousRounded />
					<p>You are not authorized to attempt this test. Please contact the Administrator for more information.</p>
				</div>
			</Paper>
		</div>
	);
};

export default StartTest;
