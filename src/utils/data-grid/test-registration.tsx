import {
	VisibilityRounded,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { encrypt } from "../helpers";

enum TestStatus {
	"DRAFT" = 1,
	"PUBLISHED" = 2,
	"CANCELLED" = 3,
}

const getStatus = (i: number) => {
	if (TestStatus.DRAFT === i) {
		return <div className="warningtag">Draft</div>;
	} else if (TestStatus.PUBLISHED === i) {
		return <div className="activetag">Published</div>;
	} else if (TestStatus.CANCELLED === i) {
		return <div className="inactivetag">Cancelled</div>;
	}
};

const GetTestRegistrationColumns = () => {
	const columns: GridColDef[] = [
		{
			field: "testName",
			headerName: "Title",
			flex: 1,
			renderCell: (params) => <div>{params.row.testId.title}</div>,
		},
		{
			field: "status",
			headerName: "Status",
			width: 110,
			align: "center",
			headerAlign: "center",
			renderCell: (params) => getStatus(params.row.testId.status),
		},
		{
			field: "date",
			headerName: "Date",
			headerAlign: "center",
			width: 110,
			align: "center",
			renderCell: (params) => (
				<div>
					{moment(params.row.startDateTime).format("DD MMM, YYYY")}
				</div>
			),
		},
		{
			field: "time",
			headerName: "Time",
			headerAlign: "center",
			width: 110,
			align: "center",
			renderCell: (params) => (
				<div>{moment(params.row.startDateTime).format("HH:mm")}</div>
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
					<NavLink to={`/start-test/${encrypt(params.row.testId._id)}`}>
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

export default GetTestRegistrationColumns;
