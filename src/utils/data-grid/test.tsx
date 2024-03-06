import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import { NavLink, useNavigate } from "react-router-dom";
import { encrypt, useAccessRole } from "../helpers";
import { useDispatch } from "react-redux";

export enum TestStatus {
    "DRAFT"=1,
    "PUBLISHED"=2,
    "CANCELLED"=3
}

const getStatus = (i: number) => {
    if(TestStatus.DRAFT === i) {
        return <div className="warningtag">Draft</div>
    } else if(TestStatus.PUBLISHED === i) {
        return <div className="activetag">Published</div>
    } else if(TestStatus.CANCELLED === i) {
        return <div className="inactivetag">Cancelled</div>
    }
}

const GetTestColumns = () => {

    const navigate = useNavigate()

	const dispatch = useDispatch<any>();

	const instituteId = useAccessRole();

	const columns: GridColDef[] = [
		{
			field: "testName",
			headerName: "Title",
			flex: 1,
			renderCell: (params) => <div onClick={() => navigate(`/test/${encrypt(params.row._id)}`)}>{params.row.title}</div>
		},
		{
			field: "batches",
			headerName: "Batches",
			width: 150,
			align: "center",
			headerAlign: "center",
			renderCell: (params) => <div>{params.row.batchId.length}</div>
		},
		{
			field: "status",
			headerName: "Status",
			width: 110,
			align: "center",
			headerAlign: "center",
			renderCell: (params) => (getStatus(params.row.status))
		},
		{
			field: "date",
			headerName: "Date",
			headerAlign: "center",
			width: 110,
			align: "center",
			renderCell: (params) => (
				<div>{moment(params.row.startDateTime).format("DD MMM, YYYY")}</div>
			)
		},
		{
			field: "time",
			headerName: "Time",
			headerAlign: "center",
			width: 110,
			align: "center",
			renderCell: (params) => (
				<div>{moment(params.row.startDateTime).format("HH:mm")}</div>
			)
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

	return columns;
};

export default GetTestColumns;
