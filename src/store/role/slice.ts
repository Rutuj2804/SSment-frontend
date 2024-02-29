import { createSlice } from "@reduxjs/toolkit";
import { RoleState } from "./types";
import { getAllRoleAssignments, getAllRoleDefinitions, getMyRole, getRole, getRoleAssignment } from "./actions";

const initialState: RoleState = {
    roles: [],
    assignments: [],
    role: {},
    roleOnMount: {},
    assignment: {}
}

export const roleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllRoleDefinitions.fulfilled, (s, a) => {
            s.roles = a.payload
        })
        builder.addCase(getAllRoleAssignments.fulfilled, (s, a) => {
            s.assignments = a.payload
        })
        builder.addCase(getMyRole.fulfilled, (s, a) => {
            s.role = a.payload
        })
        builder.addCase(getRole.fulfilled, (s, a) => {
            s.roleOnMount = a.payload
        })
        builder.addCase(getRoleAssignment.fulfilled, (s, a) => {
            s.assignment = a.payload
        })
    },
})

export default roleSlice.reducer;