import { VisibilityRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { encrypt, } from "../helpers";

const GetBatchColumns = () => {
	const columns: GridColDef[] = [
		{
			field: "testName",
			headerName: "Title",
			flex: 1,
			renderCell: (params) => <div>{params.row.name}</div>,
		},
		{
			field: "status",
			headerName: "Status",
			width: 110,
			align: "center",
			headerAlign: "center",
			renderCell: (params) => (
				<div
					className={
						params.row.isActive ? "activetag" : "inactivetag"
					}
				>
					{params.row.isActive ? "Active" : "Deleted"}
				</div>
			),
		},
		{
			field: "students",
			headerName: "Students",
			headerAlign: "center",
			width: 110,
			align: "center",
			renderCell: (params) => <div>{params.row.participants.length}</div>,
		},
		{
			field: "date",
			headerName: "Date",
			headerAlign: "center",
			width: 110,
			align: "center",
			renderCell: (params) => (
				<div>{moment(params.row.createdAt).format("DD MMM, YYYY")}</div>
			),
		},
		{
			field: "actions",
			headerName: "Actions",
			headerAlign: "center",
			width: 180,
			align: "center",
			renderCell: (params) => (
				<div className="d-flex gap-2">
					<NavLink to={`/batch/${encrypt(params.row._id)}`}>
						<IconButton size="small">
							<VisibilityRounded />
						</IconButton>
					</NavLink>
				</div>
			),
		},
	];

	return columns;
};

export default GetBatchColumns;
