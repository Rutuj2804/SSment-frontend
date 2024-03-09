import React from "react";
import { Button } from "../../library";
import { useNavigate } from "react-router-dom";
import { BatchInterface } from "../../utils/types";
import moment from "moment";
import { encrypt } from "../../utils/helpers";

interface BatchCProps {
	batch: BatchInterface
}

const Batch = ({ batch }: BatchCProps) => {

    const navigate = useNavigate()

	return (
        <div className="student__Wrapper">
			<div className="left">
				<div className="userdetails">
					<h6>{batch.name}</h6>
					<p>Created on {moment(batch.createdAt).format("DD MMM, YYYY")}</p>
				</div>
			</div>
			<div className="right">
				<Button onClick={() => navigate(`/batch/${encrypt(batch._id!)}`)}>View Batch</Button>
			</div>
		</div>
    );
};

export default Batch;
