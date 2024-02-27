import { createSlice } from "@reduxjs/toolkit";
import { RoleState } from "./types";
import { getAllRoleDefinitions, getMyRole } from "./actions";

const initialState: RoleState = {
    roles: [],
    assignments: [],
    role: {}
}

export const roleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllRoleDefinitions.fulfilled, (s, a) => {
            s.roles = a.payload
        })
        builder.addCase(getMyRole.fulfilled, (s, a) => {
            s.role = a.payload
        })
    },
})

export default roleSlice.reducer;