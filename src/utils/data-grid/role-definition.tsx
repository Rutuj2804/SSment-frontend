import { GridColDef } from "@mui/x-data-grid"
import moment from "moment";
import { IconButton, } from "@mui/material";
import { NavLink } from "react-router-dom";
import { encrypt, useAccessRole } from "../helpers";
import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteRoleDefinition } from "../../store/actions";

export const GetRoleDefinitionColumns = () => {

    const instituteId = useAccessRole()

    const dispatch = useDispatch<any>()

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
            renderCell: (params) => (
                <div className={params.row.isActive ? "activetag" : "inactivetag"}>
                    {params.row.isActive ? "Active" : "Deleted"}
                </div>
            ),
        },
        {
            field: "students",
            headerName: "Created By",
            headerAlign: "center",
            width: 200,
            align: "center",
            renderCell: () => <div>Rutuj Jeevan Bokade</div>,
        },
        {
            field: "date",
            headerName: "Created On",
            headerAlign: "center",
            width: 110,
            align: "center",
            renderCell: (params) =>
                moment(params.row.createdAt).format("DD MMM, YYYY"),
        },
        {
            field: "actions",
            headerName: "Actions",
            headerAlign: "center",
            width: 180,
            align: "center",
            renderCell: (params) => (
                <div className="d-flex gap-2">
                    <NavLink to={`/role/edit/${encrypt(params.row._id)}`}>
                        <IconButton size="small">
                            <EditRounded />
                        </IconButton>
                    </NavLink>
                    <IconButton size="small" onClick={() => dispatch(deleteRoleDefinition({ instituteId, roleId: params.row._id }))}>
                        <DeleteRounded />
                    </IconButton>
                </div>
            ),
        },
    ];

    return columns;
}