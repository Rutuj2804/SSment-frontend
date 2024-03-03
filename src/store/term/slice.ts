import { createSlice } from "@reduxjs/toolkit";
import { TermState } from "./types";
import { getAllTerms, getDisplayTerms, getTerms } from "./actions";

const initialState: TermState = {
    terms: [],
    display: [],
    term: {},
    current: ""
}

export const termSlice = createSlice({
    name: "term",
    initialState,
    reducers: {
        setCurrentTerm: (s, a) => {
            s.current = a.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(getDisplayTerms.fulfilled, (s, a) => {
            s.display = a.payload
        })
        builder.addCase(getAllTerms.fulfilled, (s, a) => {
            s.terms = a.payload
        })
        builder.addCase(getTerms.fulfilled, (s, a) => {
            s.term = a.payload
        })
    },
})

export const { setCurrentTerm } = termSlice.actions

export default termSlice.reducer;