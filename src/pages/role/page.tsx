import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Button } from "../../library";
import { Paper } from "../../components/paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { DeleteRounded, EditRounded } from "@mui/icons-material";

const columns: GridColDef[] = [
	{
		field: "testName",
		headerName: "Name",
		flex: 1,
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
		field: "students",
		headerName: "Created By",
		headerAlign: "center",
		width: 200,
		align: "center",
		renderCell: () => <div>Rutuj Jeevan Bokade</div>
	},
	{
		field: "date",
		headerName: "Created On",
		headerAlign: "center",
		width: 110,
		align: "center",
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

const Roles = () => {
	const [activeTab, setActiveTab] = useState();

	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Roles", "Role Definition"],
				link: "/roles",
			})
		);
	}, [dispatch]);
	return (
		<div className="test__Wrapper mt-2">
			<Paper className="p-3">
				<div className="test__Header">
					<h4>Roles</h4>
				</div>
				<div className="test__GridArea mt-3">
					<div className="test__TabArea">
						<div className="left">
							<Button className={"test__Tab"}>Active</Button>
							<Button className={"test__Tab test__NotActiveTab"}>
								Deleted
							</Button>
						</div>
						<div className="right">
							<Button onClick={() => navigate("/roles/create")}>
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

export default Roles;
