import { createSlice } from "@reduxjs/toolkit";
import { BatchState } from "./types";
import { getAllBatches, getBatch, getBatchDetails, getStudentsOfBatch } from "./actions";

const initialState: BatchState = {
    batches: [],
    batch: {},
    students: []
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
        builder.addCase(getStudentsOfBatch.fulfilled, (s, a) => {
            s.students = a.payload.students
            s.batches = a.payload.batches
        })
    },
})

export default termSlice.reducer;