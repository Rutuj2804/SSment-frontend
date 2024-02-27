import { createSlice } from "@reduxjs/toolkit";
import { RoleState } from "./types";
import { getAllRoleDefinitions } from "./actions";

const initialState: RoleState = {
    roles: [],
    assignments: []
}

export const roleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllRoleDefinitions.fulfilled, (s, a) => {
            s.roles = a.payload
        })
    },
})

export default roleSlice.reducer;