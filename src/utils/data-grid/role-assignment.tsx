import { GridColDef } from "@mui/x-data-grid";
import { username } from "../helpers";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";
import { EditRounded } from "@mui/icons-material";

export const GetRoleAssignmentColumns = () => {

	const columns: GridColDef[] = [
		{
			field: "testName",
			headerName: "Name",
			flex: 1,
			renderCell: (params) => username(params.row),
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
			field: "role",
			headerName: "Role",
			width: 110,
			align: "center",
			headerAlign: "center",
			renderCell: (params) => <div>{params.row.role}</div>,
		},
		{
			field: "date",
			headerName: "Assigned On",
			headerAlign: "center",
			width: 110,
			align: "center",
			renderCell: (params) => (
				<span>
					{moment(params.row.createdAt).format("DD MMM, YYYY")}
				</span>
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
					<NavLink to={`/assignment/edit/${params.row.email}`}>
						<IconButton size="small">
							<EditRounded />
						</IconButton>
					</NavLink>
				</div>
			),
		},
	];

	return columns;
};
