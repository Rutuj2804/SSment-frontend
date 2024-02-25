import { createSlice } from "@reduxjs/toolkit";
import { BatchState } from "./types";

const initialState: BatchState = {
    batches: []
}

export const termSlice = createSlice({
    name: "term",
    initialState,
    reducers: {},
    extraReducers(builder) {
    },
})

export default termSlice.reducer;