import { GridColDef } from "@mui/x-data-grid";
import { encrypt, useAccessRole, username } from "../helpers";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";
import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteRoleAssignment } from "../../store/actions";

export const GetRoleAssignmentColumns = () => {

    const dispatch = useDispatch<any>()

    const instituteId = useAccessRole()

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
			renderCell: (params) => <div>{params.row.roleId.name}</div>,
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
					<NavLink to={`/assignment/edit/${encrypt(params.row._id)}`}>
						<IconButton size="small">
							<EditRounded />
						</IconButton>
					</NavLink>
					<IconButton size="small" onClick={() => dispatch(deleteRoleAssignment({ assignmentId: params.row._id, instituteId }))}>
						<DeleteRounded />
					</IconButton>
				</div>
			),
		},
	];

	return columns;
};
