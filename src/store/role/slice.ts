import { createSlice } from "@reduxjs/toolkit";
import { RoleState } from "./types";
import { getAllRoleAssignments, getMyRole, getRoleAssignment } from "./actions";

const initialState: RoleState = {
    assignments: [],
    assignment: {}
}

export const roleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllRoleAssignments.fulfilled, (s, a) => {
            s.assignments = a.payload
        })
        builder.addCase(getRoleAssignment.fulfilled, (s, a) => {
            s.assignment = a.payload
        })
    },
})

export default roleSlice.reducer;