import { createSlice } from "@reduxjs/toolkit";
import { InstituteState } from "./types";

const initialState: InstituteState = {
    institutes: []
}

export const instituteSlice = createSlice({
    name: "institute",
    initialState,
    reducers: {},
    extraReducers(builder) {
    },
})

export default instituteSlice.reducer;