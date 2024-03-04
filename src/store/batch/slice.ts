import { createSlice } from "@reduxjs/toolkit";
import { BatchState } from "./types";
import { getAllBatches, getBatch, getBatchDetails } from "./actions";

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
        builder.addCase(getBatchDetails.fulfilled, (s, a) => {
            s.batch = a.payload.batch
            s.batch.tests = a.payload.tests
        })
    },
})

export default termSlice.reducer;