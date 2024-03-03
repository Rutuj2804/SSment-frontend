import React from "react";
import { Paper } from "../paper";
import { IconButton } from "@mui/material";
import { EditRounded, VisibilityRounded } from "@mui/icons-material";
import { GoDotFill } from "react-icons/go";
import { Button } from "../../library";
import { useNavigate } from "react-router-dom";
import { encrypt, formatNumber } from "../../utils/helpers";

interface BatchCProps {
	name: string;
	description: string;
	students: number;
	isActive: boolean;
	_id: string;
}

const Batch = ({ _id, description, isActive, name, students }: BatchCProps) => {

	const navigate = useNavigate()

	return (
		<Paper className="mb-3 batchCard__Wrapper">
			<div className="batchCard__Header">
				<h5>{name}</h5>
				<IconButton onClick={() => navigate(`/batch/edit/${encrypt(_id)}`)}>
					<EditRounded />
				</IconButton>
			</div>
			<div className="batchCard__Description">
				<p>
					{description}
				</p>
				<span>{formatNumber(students)} stundents enrolled</span>
			</div>
			<div className="batchCard__Footer">
				<p className={isActive ? "batchCard__Active" : "batchCard__InActive"}>
					<span>
						<GoDotFill />
					</span>
					&nbsp;Active
				</p>
				<Button
					className="batchCard__Button"
					startIcon={<VisibilityRounded />}
					onClick={()=>navigate(`/batch/${encrypt(_id)}`)}
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
