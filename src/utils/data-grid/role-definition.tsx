import { GridColDef } from "@mui/x-data-grid";

export const GetRoleDefinitionColumns = () => {
	const columns: GridColDef[] = [
		{
			field: "name",
			headerName: "Name",
			flex: 1,
		},
		{
			field: "status",
			headerName: "Status",
			width: 110,
			align: "center",
			headerAlign: "center",
			renderCell: (params) => <div className="activetag">Active</div>,
		},
		{
			field: "actions",
			headerName: "Actions",
			headerAlign: "center",
			width: 180,
			align: "center",
			renderCell: (params) => <div className="d-flex gap-2"></div>,
		},
	];

	return columns;
};
