import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Paper } from "../../components/paper";
import { Button } from "../../library";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

enum Tabs {
	"ONGOING" = 1,
	"UPCOMING" = 2,
	"COMPLETED" = 3,
}

const rows = [
	{ id: 1, students: 300, date: "21 Jan, 2024", time: "11:00 PM", testName: "Jon", batches: 4 },
	{ id: 2, students: 100, date: "2 Feb, 2024", time: "12:00 PM", testName: "Cersei", batches: 3 },
	{ id: 3, students: 400, date: "29 Mar, 2024", time: "01:00 PM", testName: "Jaime", batches: 3 },
	{ id: 4, students: 550, date: "30 Jun, 2024", time: "10:00 PM", testName: "Arya", batches: 11 },
	{ id: 5, students: 208, date: "8 Jan, 2024", time: "06:00 PM", testName: "Daenerys", batches: 2 },
	{ id: 6, students: 1080, date: "6 Arp, 2024", time: "02:00 PM", testName: "Trion", batches: 5 },
	{ id: 7, students: 79, date: "10 May, 2024", time: "06:00 PM", testName: "Ferrara", batches: 4 },
	{ id: 8, students: 800, date: "20 Feb, 2024", time: "08:00 PM", testName: "Rossini", batches: 3 },
	{ id: 9, students: 200, date: "16 Dec, 2024", time: "09:00 PM", testName: "Harvey", batches: 6 },
	{ id: 1, students: 300, date: "21 Jan, 2024", time: "11:00 PM", testName: "Jon", batches: 4 },
	{ id: 2, students: 100, date: "2 Feb, 2024", time: "12:00 PM", testName: "Cersei", batches: 3 },
	{ id: 3, students: 400, date: "29 Mar, 2024", time: "01:00 PM", testName: "Jaime", batches: 3 },
	{ id: 4, students: 550, date: "30 Jun, 2024", time: "10:00 PM", testName: "Arya", batches: 11 },
	{ id: 5, students: 208, date: "8 Jan, 2024", time: "06:00 PM", testName: "Daenerys", batches: 2 },
	{ id: 6, students: 1080, date: "6 Arp, 2024", time: "02:00 PM", testName: "Trion", batches: 5 },
	{ id: 7, students: 79, date: "10 May, 2024", time: "06:00 PM", testName: "Ferrara", batches: 4 },
	{ id: 8, students: 800, date: "20 Feb, 2024", time: "08:00 PM", testName: "Rossini", batches: 3 },
	{ id: 9, students: 200, date: "16 Dec, 2024", time: "09:00 PM", testName: "Harvey", batches: 6 },
];

const Test = () => {
	const [activeTab, setActiveTab] = useState(Tabs.ONGOING);

	const dispatch = useDispatch();

	const navigate = useNavigate()

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Test"],
				link: "/tests",
			})
		);
	}, [dispatch]);

	const columns: GridColDef[] = [
		{
			field: "testName",
			headerName: "Title",
			flex: 1,
			renderCell: (params) => <div onClick={() => navigate(`/test/123`)}>{params.row.testName}</div>
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
			renderCell: (params) => (
				<div className="activetag">Active</div>
			)
		},
		{
			field: "students",
			headerName: "Students",
			headerAlign: "center",
			width: 110,
			align: "center",
		},
		{
			field: "date",
			headerName: "Date",
			headerAlign: "center",
			width: 110,
			align: "center",
		},
		{
			field: "time",
			headerName: "Time",
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
					<IconButton size="small"><EditRounded /></IconButton>
					<IconButton size="small"><DeleteRounded /></IconButton>
				</div>
			)
		},
	];

	return (
		<div className="test__Wrapper">
			<Paper className="p-3">
				<div className="test__Header">
					<h4>My Tests</h4>
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
									activeTab === Tabs.UPCOMING
										? "test__Tab"
										: "test__NotActiveTab test__Tab"
								}
								onClick={() => setActiveTab(Tabs.UPCOMING)}
							>
								Upcoming
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
							<Button onClick={()=>navigate('/tests/create')}>Add +</Button>
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

export default Test;
