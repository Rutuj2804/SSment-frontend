import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { Button } from "../../library";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { AddRounded, CloudDownloadRounded, DeleteRounded, EditRounded } from "@mui/icons-material";
import { RootState } from "../../store";
import { getAllTerms } from "../../store/actions";
import moment from "moment";
import { useAccessRole } from "../../utils/helpers";

enum Tabs {
	"ACTIVE" = 2,
	"DELETED" = 1,
}

const columns: GridColDef[] = [
	{
		field: "testName",
		headerName: "Name",
		flex: 1,
		renderCell: (params) => <div>{params.row.name}</div>,
	},
	{
		field: "status",
		headerName: "Status",
		width: 110,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => <div className={params.row.isActive ? "activetag" : "inactivetag"}>{params.row.isActive ? "Active" : "Completed"}</div>,
	},
	{
		field: "institute",
		headerName: "Institute",
		flex: 1,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => <div className="">{params.row.instituteId?.name}</div>,
	},
	{
		field: "date",
		headerName: "Created On",
		headerAlign: "center",
		width: 110,
		align: "center",
		renderCell: (params) => <div className="">{moment(params.row.createdAt).format("DD MMM, YYYY")}</div>,
	},
	{
		field: "actions",
		headerName: "Actions",
		headerAlign: "center",
		width: 140,
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

const Term = () => {
	const [activeTab, setActiveTab] = useState(Tabs.ACTIVE);

	const dispatch = useDispatch<any>();

	const navigate = useNavigate();

	const instituteId = useAccessRole()

	const terms = useSelector((state: RootState) => state.term.terms)

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Administration", "Terms"],
				link: "/terms",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if(instituteId)
			dispatch(getAllTerms({ instituteId, status: activeTab - 1 }))
	}, [instituteId, dispatch, activeTab])

	return (
		<div className="test__Wrapper">
			<Paper className="p-3">
				<div className="test__Header">
					<h4>My Terms</h4>
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
								On Going
							</Button>
							<Button
								className={
									activeTab === Tabs.DELETED
										? "test__Tab"
										: "test__NotActiveTab test__Tab"
								}
								onClick={() => setActiveTab(Tabs.DELETED)}
							>
								Completed
							</Button>
						</div>
						<div className="right">
							<Button startIcon={<AddRounded />} onClick={() => navigate("/terms/create")}>
								Add
							</Button>
							<Button startIcon={<CloudDownloadRounded />}>Download</Button>
						</div>
					</div>
					<div className="test__Grid mt-3">
						<DataGrid
							rows={terms}
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

export default Term;
