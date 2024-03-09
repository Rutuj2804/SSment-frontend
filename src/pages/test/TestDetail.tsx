import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { useNavigate, useParams } from "react-router-dom";
import { Paper } from "../../components/paper";
import { Avatar, Tab, Tabs } from "@mui/material";
import { Button, Select, OutlineButton } from "../../library";
import { BatchRibbon, StudentRibbon } from "../../components/ribbon";
import { RootState } from "../../store";
import { changeStatus, getStudentsOfBatch, getTestDetails } from "../../store/actions";
import { encrypt, useAccessRole } from "../../utils/helpers";
import { setConfirmation } from "../../store/layout/slice";

interface Options {
	name: string;
	value: number;
}

export enum TestStyle {
	"SECTIONED" = 1,
	"NON_SECTIONED" = 2,
}

const TestDetail = () => {

	const [options, setOptions] = useState<Options[]>([{ name: "Draft", value: 1 }, { name: "Publish", value: 2 }, { name: "Cancel", value: 3 }])

	const [status, setStatus] = useState(1);

	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const { id } = useParams();

	const dispatch = useDispatch<any>();

	const instituteId = useAccessRole();

	const test = useSelector((state: RootState) => state.test.test);

	const batch = useSelector((state: RootState) => state.batch);

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
		if (id && instituteId) {
			dispatch(getTestDetails({ testId: id, instituteId }));
		}
	}, [id, instituteId, dispatch]);

	useEffect(() => {
		if (test._id) {
			setStatus(test.status!);
			if(test.status === 2) setOptions([{ name: "Publish", value: 2 }, { name: "Cancel", value: 3 }])
			else if(test.status === 3) setOptions([{ name: "Cancel", value: 3 }])
		}
	}, [test]);

	useEffect(() => {
		if (test.batchId)
			dispatch(
				getStudentsOfBatch({ instituteId, batchId: test.batchId })
			);
	}, [test, dispatch, instituteId]);

	const onStatusChange = (i: number) => {
		if(i === 2) {
			dispatch(setConfirmation({
				isActive: true,
				callback: () => dispatch(changeStatus({ status: i, instituteId, testId: id!, navigate })),
				text: "This action is irreversible. Are you sure you want to publish this test?"
			}))
		} else if(i === 3) {
			dispatch(setConfirmation({
				isActive: true,
				callback: () => dispatch(changeStatus({ status: i, instituteId, testId: id!, navigate })),
				text: "This action is irreversible. Are you sure you want to cancel this test?"
			}))
		}
	}

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
								selected={status}
								options={options}
								className="testDetails__Status"
								onChange={onStatusChange}
							/>
							<div className="vr"></div>
							{test.testStyle === TestStyle.SECTIONED ? (
								<OutlineButton
									onClick={() =>
										navigate(`/test/sections/${encrypt(test._id!)}`)
									}
								>
									Sections
								</OutlineButton>
							) : (
								<OutlineButton
									onClick={() =>
										navigate(`/test/questions/${encrypt(test._id!)}`)
									}
								>
									Questions
								</OutlineButton>
							)}

							<Button onClick={() => navigate(`/test/edit/${encrypt(test._id!)}`)}>
								Edit Test
							</Button>
						</div>
					</div>
					<div className="body">
						<Tabs value={value} onChange={handleChange}>
							<Tab
								label={`Students (${batch.students.length})`}
							/>
							<Tab label={`Batches (${batch.batches.length})`} />
						</Tabs>

						{value === 0 && (
							<div className="testDetail__Tab1Students">
								{batch.students.map((s) => (
									<StudentRibbon
										user={s}
										key={s._id}
										parent="TEST"
									/>
								))}
							</div>
						)}
						{value === 1 && (
							<div className="testDetail__Tab2Batches">
								{batch.batches.map((b) => (
									<BatchRibbon key={b._id} batch={b} />
								))}
							</div>
						)}
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default TestDetail;
