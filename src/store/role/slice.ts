import { createSlice } from "@reduxjs/toolkit";
import { RoleState } from "./types";
import { getAllRoleAssignments, getMyRole } from "./actions";

const initialState: RoleState = {
    assignments: [],
    assignment: {},
    role: {}
}

export const roleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getMyRole.fulfilled, (s, a) => {
            s.role = a.payload
        })
        builder.addCase(getAllRoleAssignments.fulfilled, (s, a) => {
            s.assignments = a.payload
        })
    },
})

export default roleSlice.reducer;