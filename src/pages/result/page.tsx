import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Paper } from "../../components/paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { CloudDownload, DeleteRounded, EditRounded, FilterListRounded } from "@mui/icons-material";
import { Button, OutlineButton, Select } from "../../library";
import { useNavigate } from "react-router-dom";

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
];

const columns: GridColDef[] = [
	{
		field: "testName",
		headerName: "Name",
		flex: 1,
		renderCell: (params) => <div>{params.row.testName}</div>,
	},
	{
		field: "test Name",
		headerName: "Test Name",
		flex: 1,
		renderCell: (params) => <div>Test Awesome</div>,
	},
	{
		field: "status",
		headerName: "Status",
		width: 110,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => <div className="activetag">Completed</div>,
	},
	{
		field: "date",
		headerName: "Completed On",
		headerAlign: "center",
		width: 140,
		align: "center",
	},
	{
		field: "detection",
		headerName: "Malpractice",
		width: 110,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => <div className="inactivetag">Detected</div>,
	},
	{
		field: "result",
		headerName: "Result",
		width: 110,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => <div className="activetag">Passed</div>,
	},
	{
		field: "score",
		headerName: "Score",
		width: 110,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => <div className="">67%</div>,
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

const options = [
    { name: "Test Awesome", value: "1" },
    { name: "General Coding", value: "2" }
]

const batchOptions = [
    { name: "All Batches", value: "0" },
    { name: "Batch Awesome", value: "1" },
    { name: "Batch Coding", value: "2" }
]

const resultOptions = [
    { name: "All", value: "0" },
    { name: "Passed", value: "1" },
    { name: "Failed", value: "2" }
]

const Result = () => {
	const [filter, setFilter] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Results", "Results"],
				link: "/results",
			})
		);
	}, [dispatch]);

	return (
		<div className="test__Wrapper">
			<Paper className="p-3">
				<div className="test__Header">
					<h4>My Results</h4>
					<div className="right">
						<OutlineButton startIcon={<FilterListRounded />} onClick={() => setFilter((v) => !v)}>
							Filters (2)
						</OutlineButton>
						<Button startIcon={<CloudDownload />}>Download</Button>
					</div>
				</div>
				{filter && <div className="test__Filters">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <Select
                                options={options}
                                name="name"
                                value="value"
                                selected={"1"}
                                label="Test"
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <Select
                                options={batchOptions}
                                name="name"
                                value="value"
                                selected={"0"}
                                label="Batch"
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <Select
                                options={resultOptions}
                                name="name"
                                value="value"
                                selected={"1"}
                                label="Result Type"
                            />
                        </div>
                    </div>
                    </div>}
				<div className="test__GridArea mt-3">
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

export default Result;
