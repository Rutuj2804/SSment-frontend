import {
	DeleteRounded,
	VisibilityRounded,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { encrypt } from "../helpers";
import { useDispatch } from "react-redux";
import { setDeleteConfirmation } from "../../store/layout/slice";
import { deleteTest } from "../../store/actions";

export enum TestStatus {
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

const GetTestColumns = () => {
	const dispatch = useDispatch<any>();

	const columns: GridColDef[] = [
		{
			field: "testName",
			headerName: "Title",
			flex: 1,
			renderCell: (params) => <div>{params.row.title}</div>,
		},
		{
			field: "batches",
			headerName: "Batches",
			width: 150,
			align: "center",
			headerAlign: "center",
			renderCell: (params) => <div>{params.row.batchId.length}</div>,
		},
		{
			field: "status",
			headerName: "Status",
			width: 110,
			align: "center",
			headerAlign: "center",
			renderCell: (params) => getStatus(params.row.status),
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
					<NavLink to={`/test/${encrypt(params.row._id)}`}>
						<IconButton size="small">
							<VisibilityRounded />
						</IconButton>
					</NavLink>
					<IconButton
						size="small"
						onClick={() =>
							dispatch(
								setDeleteConfirmation({
									isActive: true,
									text: "This action is irreversible. Are you sure you want to delete this test?",
									callback: () =>
										dispatch(
											deleteTest({
												testId: params.row._id,
											})
										),
								})
							)
						}
					>
						<DeleteRounded />
					</IconButton>
				</div>
			),
		},
	];

	return columns;
};

export default GetTestColumns;
