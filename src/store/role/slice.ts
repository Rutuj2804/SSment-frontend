import { createSlice } from "@reduxjs/toolkit";
import { RoleState } from "./types";

const initialState: RoleState = {
    roles: [],
    assignments: []
}

export const roleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {},
    extraReducers(builder) {
    },
})

export default roleSlice.reducer;