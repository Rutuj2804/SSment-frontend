import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Button } from "../../library";
import { Paper } from "../../components/paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import {
	AddRounded,
	CloudDownloadRounded,
	DeleteRounded,
	EditRounded,
} from "@mui/icons-material";
import { RootState } from "../../store";
import { getAllRoleDefinitions } from "../../store/actions";
import moment from "moment";

const columns: GridColDef[] = [
	{
		field: "name",
		headerName: "Name",
		flex: 1,
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
		field: "students",
		headerName: "Created By",
		headerAlign: "center",
		width: 200,
		align: "center",
		renderCell: () => <div>Rutuj Jeevan Bokade</div>,
	},
	{
		field: "date",
		headerName: "Created On",
		headerAlign: "center",
		width: 110,
		align: "center",
		renderCell: (params) =>
			moment(params.row.createdAt).format("DD MMM, YYYY"),
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

const Roles = () => {
	const [activeTab, setActiveTab] = useState(Tabs.ACTIVE);

	const dispatch = useDispatch<any>();

	const navigate = useNavigate();

	const roles = useSelector((state: RootState) => state.role.roles);

	const termId = useSelector((state: RootState) => state.term.current);

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Responsibilities", "Role Definition"],
				link: "/roles",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if (termId) dispatch(getAllRoleDefinitions({ termId, status: activeTab - 1 }));
	}, [dispatch, activeTab]);

	return (
		<div className="test__Wrapper mt-2">
			<Paper className="p-3">
				<div className="test__Header">
					<h4>Roles</h4>
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
								onClick={() => navigate("/roles/create")}
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
							rows={roles}
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

export default Roles;
