import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { useNavigate } from "react-router-dom";
import { Paper } from "../../components/paper";
import { Avatar, Tab, Tabs } from "@mui/material";
import { Button, Select, OutlineButton } from "../../library";
import { BatchRibbon, StudentRibbon } from "../../components/ribbon";
import { RootState } from "../../store";

const options = [
	{ name: "Draft", value: 1 },
	{ name: "Published", value: 1 },
];

const TestDetail = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const dispatch = useDispatch();

	const user = useSelector((state: RootState) => state.profile.user)

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Test", "Test Awesome"],
				link: "/test/:id",
			})
		);
	}, [dispatch]);

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
								onClick={() => navigate("/test/questions/:id")}
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
