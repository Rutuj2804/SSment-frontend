import { createSlice } from "@reduxjs/toolkit";
import { TestState } from "./types";

const initialState: TestState = {
    tests: []
}

export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {},
    extraReducers(builder) {
    },
})

export default testSlice.reducer;