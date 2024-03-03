import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Button, OutlineButton } from "../../library";
import { Tab, Tabs } from "@mui/material";
import { StudentRibbon, TestRibbon } from "../../components/ribbon";
import { deleteBatch, getBatch } from "../../store/actions";
import { encrypt, useAccessRole } from "../../utils/helpers";
import { RootState } from "../../store";
import { setDeleteConfirmation } from "../../store/layout/slice";

const BatchDetail = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const dispatch = useDispatch<any>();

	const { id } = useParams();

	const instituteId = useAccessRole();

	const batch = useSelector((state: RootState) => state.batch.batch);

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Batch", "Batch Awesome"],
				link: "/batch/:id",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if (id && instituteId) dispatch(getBatch({ batchId: id, instituteId }));
	}, [id, instituteId, dispatch]);

	return (
		<Paper className="p-3">
			<div className="batchDetail__Wrapper">
				<div className="batchDetail__Header">
					<h5>{batch.name}</h5>
					<p>{batch.description}</p>
				</div>
				<div className="batchDetail__Actions">
					<h6>Actions :</h6>
					<div className="batchDetail__ActionButton">
						<OutlineButton
							onClick={() =>
								navigate(`/batch/renew/${encrypt(batch._id!)}`)
							}
						>
							Renew Batch
						</OutlineButton>
						<OutlineButton
							onClick={() =>
								dispatch(
									setDeleteConfirmation({
										isActive: true,
										callback: dispatch(
											deleteBatch({
												batchId: batch._id!,
												instituteId,
											})
										),
										text: "This action is irreversible. Are you sure you want to delete this batch?",
									})
								)
							}
						>
							Delete
						</OutlineButton>
						<Button
							onClick={() =>
								navigate(`/batch/edit/${encrypt(batch._id!)}`)
							}
						>
							Edit Batch
						</Button>
					</div>
				</div>
				<div className="body">
					<Tabs value={value} onChange={handleChange}>
						<Tab label="Students (202)" />
						<Tab label="Tests (3)" />
					</Tabs>

					{value === 0 && (
						<div className="batchDetail__Tab1Students">
							<StudentRibbon />
							<StudentRibbon />
							<StudentRibbon />
							<StudentRibbon />
							<StudentRibbon />
						</div>
					)}
					{value === 1 && (
						<div className="batchDetail__Tab2Tests">
							<TestRibbon />
							<TestRibbon />
							<TestRibbon />
							<TestRibbon />
						</div>
					)}
				</div>
			</div>
		</Paper>
	);
};

export default BatchDetail;
