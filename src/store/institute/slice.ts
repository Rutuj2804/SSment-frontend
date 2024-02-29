import { createSlice } from "@reduxjs/toolkit";
import { InstituteState } from "./types";
import { getAllInstitutes, getInstitute } from "./actions";

const initialState: InstituteState = {
    institutes: [],
    institute: {}
}

export const instituteSlice = createSlice({
    name: "institute",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllInstitutes.fulfilled, (s, a) => {
            s.institutes = a.payload
        })
        builder.addCase(getInstitute.fulfilled, (s, a) => {
            s.institute = a.payload
        })
    },
})

export default instituteSlice.reducer;