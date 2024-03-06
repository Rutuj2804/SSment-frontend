import { createSlice } from "@reduxjs/toolkit";
import { TestState } from "./types";
import { getAllTests, getTestDetails } from "./actions";

const initialState: TestState = {
    tests: [],
    test: {},
}

export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getTestDetails.fulfilled, (s, a) => {
            s.test = a.payload
        })
        builder.addCase(getAllTests.fulfilled, (s, a) => {
            s.tests = a.payload
        })
    },
})

export default testSlice.reducer;