import { Avatar } from "@mui/material";
import React from "react";
import { Button, OutlineButton } from "../../library";
import { useNavigate } from "react-router-dom";
import { TestInterface } from "../../utils/types";
import moment from "moment";
import { encrypt } from "../../utils/helpers";

interface TestCProps {
	test: TestInterface
}

const Test = ({ test }: TestCProps) => {

    const navigate = useNavigate()

	return (
        <div className="student__Wrapper">
			<div className="left">
				<Avatar />
				<div className="userdetails">
					<h6>{test.title}</h6>
					<p>{moment(test.startDateTime).format("DD MMM, YYYY")} | {moment(test.startDateTime).format("HH:mm")}</p>
				</div>
			</div>
			<div className="right">
				<OutlineButton onClick={() => navigate(`/test/${encrypt(test._id!)}`)}>View Test</OutlineButton>
				<Button onClick={() => navigate('/results')}>View Results</Button>
			</div>
		</div>
    );
};

export default Test;
