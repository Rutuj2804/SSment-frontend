import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Paper } from "../../components/paper";
import { Button } from "../../library";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import {
	AddRounded,
	CloudDownloadRounded,
	DeleteRounded,
	EditRounded,
} from "@mui/icons-material";
import { getAllRoleAssignments } from "../../store/actions";
import { RootState } from "../../store";
import { username } from "../../utils/helpers";
import moment from "moment";

const columns: GridColDef[] = [
	{
		field: "testName",
		headerName: "Name",
		flex: 1,
		renderCell: (params) => username(params.row.userId),
	},
	{
		field: "status",
		headerName: "Status",
		width: 110,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => (
			<div className={params.row.isActive ? "activetag" : "inactivetag"}>
				{params.row.isActive ? "Active" : "Deleted"}
			</div>
		),
	},
	{
		field: "role",
		headerName: "Role",
		width: 110,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => <div>{params.row.roleId.name}</div>,
	},
	{
		field: "date",
		headerName: "Assigned On",
		headerAlign: "center",
		width: 110,
		align: "center",
		renderCell: (params) => <span>{moment(params.row.createdAt).format("DD MMM, YYYY")}</span>,
	},
	{
		field: "actions",
		headerName: "Actions",
		headerAlign: "center",
		width: 180,
		align: "center",
		renderCell: (params) => (
			<div className="d-flex gap-2">
				<IconButton size="small">
					<EditRounded />
				</IconButton>
				<IconButton size="small">
					<DeleteRounded />
				</IconButton>
			</div>
		),
	},
];

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

	const termId = useSelector((state: RootState) => state.term.current);

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Responsibilities", "Role Assigned"],
				link: "/assignments",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if (termId)
			dispatch(getAllRoleAssignments({ termId, status: activeTab - 1 }));
	}, [dispatch, activeTab]);

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
