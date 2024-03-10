import { createSlice } from "@reduxjs/toolkit";
import { RoleState } from "./types";
import { getAllRoleAssignments } from "./actions";

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
    },
})

export default roleSlice.reducer;