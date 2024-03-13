import React, { useEffect } from "react";
import { Paper } from "../../components/paper";
import { Avatar } from "@mui/material";
import { Button } from "../../library";
import { useNavigate, useParams } from "react-router-dom";
import { DangerousRounded, PlayArrowRounded, WarningRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getTestRegistrationDetails } from "../../store/actions";
import { RootState } from "../../store";
import moment from "moment";
import { decrypt, encrypt } from "../../utils/helpers";

const TestStyle = ["Sectioned", "Non Sectioned"]

const StartTest = () => {

	const { id } = useParams()

	const navigate = useNavigate()

	const dispatch = useDispatch<any>()

	const test = useSelector((state: RootState) => state.test.test)

	const count = useSelector((state: RootState) => state.test.counts)

	useEffect(() => {
		if(id)
			dispatch(getTestRegistrationDetails({ testId: id, navigate }))
	}, [dispatch, id])

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
							<h4>{test.title}</h4>
							<p>
								{test.description}
							</p>
						</div>
					</div>
					<div className="infodetails">
						<div className="unit">
							<h6>Style</h6>
							<p>{TestStyle[test.testStyle! - 1]}</p>
						</div>
						<div className="unit">
							<h6>Time</h6>
							<p>{moment(test.startDateTime).format("HH:mm")}</p>
						</div>
						<div className="unit">
							<h6>Date</h6>
							<p>{moment(test.startDateTime).format("DD MMM, YYYY")}</p>
						</div>
						<div className="unit">
							<h6>{test.testStyle! - 1 ? "Questions" : "Sections"}</h6>
							<p>{test.testStyle! - 1 ? count?.questions : count?.sections}</p>
						</div>
						<div className="unit">
							<h6>Duration</h6>
							<p>{test.timeLimit} mins</p>
						</div>
					</div>
					<div className="actions">
						<h6>Actions :</h6>
						<div className="testDetails__Actions">
							<Button startIcon={<PlayArrowRounded />} onClick={() => navigate(`/terms-and-conditions/${encrypt(decrypt(id!)!)}`)}>
								Start Test
							</Button>
						</div>
					</div>
				</div>
				<div className="layoutMessage__Message layoutMessage__Warning">
					<WarningRounded />
					<p>Contact the Administrator if you are not able to see correct the test.</p>
				</div>
				<div className="layoutMessage__Message layoutMessage__Danger">
					<DangerousRounded />
					<p>You are not authorized to attempt this test. Please contact the Administrator for more information.</p>
				</div>
			</Paper>
		</div>
	);
};

export default StartTest;
