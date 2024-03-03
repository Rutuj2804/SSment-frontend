import { createSlice } from "@reduxjs/toolkit";
import { BatchState } from "./types";
import { getAllBatches, getBatch } from "./actions";

const initialState: BatchState = {
    batches: [],
    batch: {}
}

export const termSlice = createSlice({
    name: "term",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllBatches.fulfilled, (s, a) => {
            s.batches = a.payload
        })
        builder.addCase(getBatch.fulfilled, (s, a) => {
            s.batch = a.payload
        })
    },
})

export default termSlice.reducer;