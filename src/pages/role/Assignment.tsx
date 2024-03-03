import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Paper } from "../../components/paper";
import { Button } from "../../library";
import { DataGrid } from "@mui/x-data-grid";
import {
	AddRounded,
	CloudDownloadRounded,
} from "@mui/icons-material";
import { getAllRoleAssignments } from "../../store/actions";
import { RootState } from "../../store";
import { useAccessRole } from "../../utils/helpers";
import { GetRoleAssignmentColumns } from "../../utils/data-grid";

enum Tabs {
	"ACTIVE" = 2,
	"DELETED" = 1,
}

const Assignments = () => {
	const [activeTab, setActiveTab] = useState(Tabs.ACTIVE);

	const dispatch = useDispatch<any>();

	const navigate = useNavigate();

	const assignments = useSelector(
		(state: RootState) => state.role.assignments
	);

	const instituteId = useAccessRole()

	const columns = GetRoleAssignmentColumns()

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Responsibilities", "Role Assigned"],
				link: "/assignments",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if (instituteId)
			dispatch(getAllRoleAssignments({ instituteId, status: activeTab - 1 }));
	}, [dispatch, activeTab, instituteId]);

	return (
		<div className="test__Wrapper mt-2">
			<Paper className="p-3">
				<div className="test__Header">
					<h4>Role Assignments</h4>
				</div>
				<div className="test__GridArea mt-3">
					<div className="test__TabArea">
						<div className="left">
							<Button
								className={
									activeTab === Tabs.ACTIVE
										? "test__Tab"
										: "test__NotActiveTab test__Tab"
								}
								onClick={() => setActiveTab(Tabs.ACTIVE)}
							>
								Active
							</Button>
							<Button
								className={
									activeTab === Tabs.DELETED
										? "test__Tab"
										: "test__NotActiveTab test__Tab"
								}
								onClick={() => setActiveTab(Tabs.DELETED)}
							>
								Deleted
							</Button>
						</div>
						<div className="right">
							<Button
								startIcon={<AddRounded />}
								onClick={() => navigate("/assignments/create")}
							>
								Add
							</Button>
							<Button startIcon={<CloudDownloadRounded />}>
								Download
							</Button>
						</div>
					</div>
					<div className="test__Grid mt-3">
						<DataGrid
							rows={assignments}
							columns={columns}
							initialState={{
								pagination: {
									paginationModel: {
										pageSize: 10,
									},
								},
							}}
							pageSizeOptions={[5]}
							checkboxSelection
							disableRowSelectionOnClick
							getRowId={(row) => row._id}
						/>
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default Assignments;
