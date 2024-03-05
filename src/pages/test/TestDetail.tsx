import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { useNavigate, useParams } from "react-router-dom";
import { Paper } from "../../components/paper";
import { Avatar, Tab, Tabs } from "@mui/material";
import { Button, Select, OutlineButton } from "../../library";
import { BatchRibbon, StudentRibbon } from "../../components/ribbon";
import { RootState } from "../../store";
import { getTestDetails } from "../../store/actions";
import { useAccessRole } from "../../utils/helpers";

const options = [
	{ name: "Draft", value: 1 },
	{ name: "Published", value: 2 },
	{ name: "Cancelled", value: 3 },
];

const TestDetail = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const { id } = useParams()

	const dispatch = useDispatch<any>();

	const instituteId = useAccessRole()

	const user = useSelector((state: RootState) => state.profile.user)

	const test = useSelector((state: RootState) => state.test.test)

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Test", "Test Awesome"],
				link: "/test/:id",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if(id && instituteId) {
			dispatch(getTestDetails({ testId: id, instituteId }))
		}
	} , [id, instituteId])

	return (
		<div className="testDetail__Wrapper">
			<Paper className="p-3">
				<div className="testDetail__Header">
					<div className="left">
						<Avatar
							variant="rounded"
							sx={{ height: 150, width: 150 }}
						/>
						<div className="details">
							<h4>{test.title}</h4>
							<p>{test.description}</p>
						</div>
					</div>
					<div className="actions">
						<h6>Actions :</h6>
						<div className="testDetails__Actions">
							<Select
								name="name"
								value="value"
								selected={1}
								options={options}
								className="testDetails__Status"
							/>
							<div className="vr"></div>
							<OutlineButton
								onClick={() => navigate(`/test/questions/${test._id}`)}
							>
								Questions
							</OutlineButton>
							<Button onClick={() => navigate("/tests/create")}>
								Edit Test
							</Button>
						</div>
					</div>
					<div className="body">
						<Tabs
							value={value}
							onChange={handleChange}
						>
							<Tab label="Students (202)" />
							<Tab label="Batches (3)" />
						</Tabs>

						{value === 0 &&<div className="testDetail__Tab1Students">
							<StudentRibbon user={user} parent="TEST" />
							<StudentRibbon user={user} parent="TEST" />
							<StudentRibbon user={user} parent="TEST" />
							<StudentRibbon user={user} parent="TEST" />
							<StudentRibbon user={user} parent="TEST" />
						</div>}
						{value === 1 && <div className="testDetail__Tab2Batches">
							<BatchRibbon />
							<BatchRibbon />
							<BatchRibbon />
							<BatchRibbon />
							<BatchRibbon />
						</div>}
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default TestDetail;
