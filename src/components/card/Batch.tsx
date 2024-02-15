import React from "react";
import { Paper } from "../paper";
import { IconButton } from "@mui/material";
import { EditRounded, VisibilityRounded } from "@mui/icons-material";
import { GoDotFill } from "react-icons/go";
import { Button } from "../../library";
import { useNavigate } from "react-router-dom";

const Batch = () => {

	const navigate = useNavigate()

	return (
		<Paper className="mb-3 batchCard__Wrapper">
			<div className="batchCard__Header">
				<h5>Estelle Frye</h5>
				<IconButton onClick={() => navigate("/batch/edit/123")}>
					<EditRounded />
				</IconButton>
			</div>
			<div className="batchCard__Description">
				<p>
					Lume is a platform and network for nursing professionals.
					Lume's goal is to become the trusted advisor for all of
					nurses' financial needs by bringing them access to
					innovative and intuitive products that help them eliminate
					debt to make the most of their money.
				</p>
				<span>4.3k stundents enrolled</span>
			</div>
			<div className="batchCard__Footer">
				<p>
					<span>
						<GoDotFill />
					</span>
					&nbsp;Active
				</p>
				<Button
					className="batchCard__Button"
					startIcon={<VisibilityRounded />}
					onClick={()=>navigate("/batch/123")}
				>
					View
				</Button>
			</div>
		</Paper>
	);
};

export default Batch;

/**
 * 1) Batch name
 * 2) Student count
 * 3) Total tests conducted**
 * 4) View button
 * 5) Avatar group
 * https://dribbble.com/shots/18781355-Lume-Cards
 */
