import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { Button } from "../../library";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { DeleteRounded, EditRounded } from "@mui/icons-material";

enum Tabs {
	"ACTIVE" = 1,
	"DELETED" = 2,
}

const rows = [
	{
		id: 1,
		students: 300,
		date: "21 Jan, 2024",
		time: "11:00 PM",
		testName: "Jon",
		batches: 4,
	},
	{
		id: 2,
		students: 100,
		date: "2 Feb, 2024",
		time: "12:00 PM",
		testName: "Cersei",
		batches: 3,
	},
	{
		id: 3,
		students: 400,
		date: "29 Mar, 2024",
		time: "01:00 PM",
		testName: "Jaime",
		batches: 3,
	},
	{
		id: 4,
		students: 550,
		date: "30 Jun, 2024",
		time: "10:00 PM",
		testName: "Arya",
		batches: 11,
	},
	{
		id: 5,
		students: 208,
		date: "8 Jan, 2024",
		time: "06:00 PM",
		testName: "Daenerys",
		batches: 2,
	},
	{
		id: 6,
		students: 1080,
		date: "6 Arp, 2024",
		time: "02:00 PM",
		testName: "Trion",
		batches: 5,
	},
	{
		id: 7,
		students: 79,
		date: "10 May, 2024",
		time: "06:00 PM",
		testName: "Ferrara",
		batches: 4,
	},
	{
		id: 8,
		students: 800,
		date: "20 Feb, 2024",
		time: "08:00 PM",
		testName: "Rossini",
		batches: 3,
	},
	{
		id: 9,
		students: 200,
		date: "16 Dec, 2024",
		time: "09:00 PM",
		testName: "Harvey",
		batches: 6,
	},
	{
		id: 1,
		students: 300,
		date: "21 Jan, 2024",
		time: "11:00 PM",
		testName: "Jon",
		batches: 4,
	},
	{
		id: 2,
		students: 100,
		date: "2 Feb, 2024",
		time: "12:00 PM",
		testName: "Cersei",
		batches: 3,
	},
	{
		id: 3,
		students: 400,
		date: "29 Mar, 2024",
		time: "01:00 PM",
		testName: "Jaime",
		batches: 3,
	},
	{
		id: 4,
		students: 550,
		date: "30 Jun, 2024",
		time: "10:00 PM",
		testName: "Arya",
		batches: 11,
	},
	{
		id: 5,
		students: 208,
		date: "8 Jan, 2024",
		time: "06:00 PM",
		testName: "Daenerys",
		batches: 2,
	},
	{
		id: 6,
		students: 1080,
		date: "6 Arp, 2024",
		time: "02:00 PM",
		testName: "Trion",
		batches: 5,
	},
	{
		id: 7,
		students: 79,
		date: "10 May, 2024",
		time: "06:00 PM",
		testName: "Ferrara",
		batches: 4,
	},
	{
		id: 8,
		students: 800,
		date: "20 Feb, 2024",
		time: "08:00 PM",
		testName: "Rossini",
		batches: 3,
	},
	{
		id: 9,
		students: 200,
		date: "16 Dec, 2024",
		time: "09:00 PM",
		testName: "Harvey",
		batches: 6,
	},
];

const columns: GridColDef[] = [
	{
		field: "testName",
		headerName: "Name",
		flex: 1,
		renderCell: (params) => <div>{params.row.testName}</div>,
	},
	{
		field: "batches",
		headerName: "Batches",
		width: 150,
		align: "center",
		headerAlign: "center",
	},
	{
		field: "status",
		headerName: "Status",
		width: 110,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => <div className="activetag">Active</div>,
	},
	{
		field: "institute",
		headerName: "Institute",
		flex: 1,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => <div className="">MIT ADT University</div>,
	},
	{
		field: "date",
		headerName: "Created On",
		headerAlign: "center",
		width: 110,
		align: "center",
	},
	{
		field: "createdBy",
		headerName: "Created By",
		headerAlign: "center",
		width: 200,
		align: "center",
		renderCell: (params) => (<>Rutuj Jeevan Bokade</>)
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

	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Administration", "Terms"],
				link: "/terms",
			})
		);
	}, [dispatch]);

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
								Deleted
							</Button>
						</div>
						<div className="right">
							<Button onClick={() => navigate("/terms/create")}>
								Add +
							</Button>
							<Button>Download</Button>
						</div>
					</div>
					<div className="test__Grid mt-3">
						<DataGrid
							rows={rows}
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
							getRowId={(row) => row.id}
						/>
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default Term;
