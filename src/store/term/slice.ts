import { createSlice } from "@reduxjs/toolkit";
import { TermState } from "./types";

const initialState: TermState = {
    terms: []
}

export const batchSlice = createSlice({
    name: "batch",
    initialState,
    reducers: {},
    extraReducers(builder) {
    },
})

export default batchSlice.reducer;