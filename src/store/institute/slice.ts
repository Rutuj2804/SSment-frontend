import { createSlice } from "@reduxjs/toolkit";
import { InstituteState } from "./types";
import { getAllInstitutes } from "./actions";

const initialState: InstituteState = {
    institutes: []
}

export const instituteSlice = createSlice({
    name: "institute",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllInstitutes.fulfilled, (s, a) => {
            s.institutes = a.payload
        })
    },
})

export default instituteSlice.reducer;