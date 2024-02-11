import React from "react";
import { Button } from "../../library";
import { useNavigate } from "react-router-dom";

const Batch = () => {

    const navigate = useNavigate()

	return (
        <div className="student__Wrapper">
			<div className="left">
				<div className="userdetails">
					<h6>Batch Awesome</h6>
					<p>Created on 12 Jan, 2024</p>
				</div>
			</div>
			<div className="right">
				<Button onClick={() => navigate('/batch/123')}>View Batch</Button>
			</div>
		</div>
    );
};

export default Batch;
