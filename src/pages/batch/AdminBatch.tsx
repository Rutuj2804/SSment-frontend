import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { Button, Select } from "../../library";
import { IconButton } from "@mui/material";
import { AddRounded, CloudDownloadRounded, DeleteRounded, EditRounded } from "@mui/icons-material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { RootState } from "../../store";
import moment from "moment";
import { encrypt, useAccessRole } from "../../utils/helpers";
import { getAllBatches } from "../../store/batch/actions";

const columns: GridColDef[] = [
	{
		field: "testName",
		headerName: "Title",
		flex: 1,
		renderCell: (params) => <div>{params.row.name}</div>
	},
	{
		field: "status",
		headerName: "Status",
		width: 110,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => (
			<div className={params.row.isActive ? "activetag": "inactivetag"}>{params.row.isActive ? "Active" : "Deleted"}</div>
		)
	},
	{
		field: "students",
		headerName: "Students",
		headerAlign: "center",
		width: 110,
		align: "center",
		renderCell: (params) => <div>{params.row.participants.length}</div>
	},
	{
		field: "date",
		headerName: "Date",
		headerAlign: "center",
		width: 110,
		align: "center",
		renderCell: (params) => <div>{moment(params.row.createdAt).format("DD MMM, YYYY")}</div>
	},
	{
		field: "actions",
		headerName: "Actions",
		headerAlign: "center",
		width: 180,
		align: "center",
		renderCell: (params) => (
			<div className="d-flex gap-2">
				<NavLink to={`/batch/edit/${encrypt(params.row._id)}`}><IconButton size="small"><EditRounded /></IconButton></NavLink>
				<IconButton size="small"><DeleteRounded /></IconButton>
			</div>
		)
	},
];

enum Tabs {
	"ONGOING" = 2,
	"COMPLETED" = 1,
}

const institutionOptions = [
	{ name: "MIT ADT University", value: "1" },
	{ name: "IIIT Delhi", value: "2" },
	{ name: "IIT Bombay", value: "3" },
]

const AdminBatch = () => {

	const [activeTab, setActiveTab] = useState(Tabs.ONGOING);

	const dispatch = useDispatch<any>();

	const navigate = useNavigate()

	const batches = useSelector((state: RootState) => state.batch.batches)

	const instituteId = useAccessRole()

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Test"],
				link: "/tests",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if(instituteId)
			dispatch(getAllBatches({ instituteId, status: activeTab - 1 }))
	}, [instituteId, dispatch, activeTab])

	return (
		<div className="test__Wrapper">
			<Paper className="p-3">
				<div className="test__Header">
					<h4>My Batches</h4>
					<div className="right test__Select">
						<Select
							options={institutionOptions}
							name="name"
							value="value"
							selected={"1"}
						/>
					</div>
				</div>
				<div className="test__GridArea mt-3">
					<div className="test__TabArea">
						<div className="left">
							<Button
								className={
									activeTab === Tabs.ONGOING
										? "test__Tab"
										: "test__NotActiveTab test__Tab"
								}
								onClick={() => setActiveTab(Tabs.ONGOING)}
							>
								On Going
							</Button>
							<Button
								className={
									activeTab === Tabs.COMPLETED
										? "test__Tab"
										: "test__NotActiveTab test__Tab"
								}
								onClick={() => setActiveTab(Tabs.COMPLETED)}
							>
								Completed
							</Button>
						</div>
						<div className="right">
							<Button startIcon={<AddRounded />} onClick={()=>navigate('/batches/create')}>Add</Button>
							<Button startIcon={<CloudDownloadRounded />}>Download</Button>
						</div>
					</div>
					<div className="test__Grid mt-3">
						<DataGrid
							rows={batches}
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

export default AdminBatch;
