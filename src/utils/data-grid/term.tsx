import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { encrypt } from "../helpers";
import { useDispatch } from "react-redux";
import { deleteTerms } from "../../store/actions";

export const GetTermColumns = () => {

	const dispatch = useDispatch<any>()

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
			renderCell: (params) => (
				<div
					className={
						params.row.isActive ? "activetag" : "inactivetag"
					}
				>
					{params.row.isActive ? "Active" : "Completed"}
				</div>
			),
		},
		{
			field: "institute",
			headerName: "Institute",
			flex: 1,
			align: "center",
			headerAlign: "center",
			renderCell: (params) => (
				<div className="">{params.row.instituteId?.name}</div>
			),
		},
		{
			field: "date",
			headerName: "Created On",
			headerAlign: "center",
			width: 110,
			align: "center",
			renderCell: (params) => (
				<div className="">
					{moment(params.row.createdAt).format("DD MMM, YYYY")}
				</div>
			),
		},
		{
			field: "actions",
			headerName: "Actions",
			headerAlign: "center",
			width: 140,
			align: "center",
			renderCell: (params) => (
				<div className="d-flex gap-2">
					<NavLink to={`/terms/edit/${encrypt(params.row._id)}`}>
						<IconButton size="small">
							<EditRounded />
						</IconButton>
					</NavLink>
					<IconButton size="small" onClick={() => dispatch(deleteTerms({ termId: params.row._id }))}>
						<DeleteRounded />
					</IconButton>
				</div>
			),
		},
	];

	return columns;
};
