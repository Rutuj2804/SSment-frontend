import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Paper } from "../../components/paper";
import { Button } from "../../library";
import { AddRounded, CloudDownloadRounded, DeleteRounded, EditRounded } from "@mui/icons-material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { getAllInstitutes, getAllVendors } from "../../store/actions";
import { RootState } from "../../store";
import moment from "moment";
import { encrypt } from "../../utils/helpers";

const columns: GridColDef[] = [
	{
		field: "testName",
		headerName: "Name",
		flex: 1,
		renderCell: (params) => <div>{params.row.name}</div>
	},
	{
		field: "status",
		headerName: "Status",
		width: 110,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => (
			<div className={params.row.isActive ? "activetag":"inactivetag"}>{params.row.isActive ? "Active" : "Deleted"}</div>
		)
	},
	{
		field: "date",
		headerName: "Date",
		headerAlign: "center",
		width: 110,
		align: "center",
		renderCell: (params) => (moment(params.row.createdAt).format("DD MMM, YYYY"))
	},
	{
		field: "actions",
		headerName: "Actions",
		headerAlign: "center",
		width: 180,
		align: "center",
		renderCell: (params) => (
			<div className="d-flex gap-2">
				<NavLink to={`/institute/edit/${encrypt(params.row._id)}`}><IconButton size="small"><EditRounded /></IconButton></NavLink>
				<IconButton size="small"><DeleteRounded /></IconButton>
			</div>
		)
	},
];

const Vendors = () => {

	const dispatch = useDispatch<any>();

	const navigate = useNavigate();

	const vendors = useSelector((state: RootState) => state.institute.vendors)

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Administration", "Vendors"],
				link: "/vendors",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		dispatch(getAllVendors({}))
	}, [dispatch])

	return (
		<div className="test__Wrapper">
			<Paper className="p-3">
				<div className="test__Header">
					<h4>My Vendors</h4>
					<div className="right">
						<Button
							startIcon={<AddRounded />}
							onClick={() => navigate("/vendor/create")}
						>
							Add
						</Button>
						<Button startIcon={<CloudDownloadRounded />}>
							Download
						</Button>
					</div>
				</div>
				<div className="test__GridArea mt-3">
					<div className="test__Grid mt-3">
						<DataGrid
							rows={vendors}
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
							getRowId={(row) => row._id}
						/>
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default Vendors;