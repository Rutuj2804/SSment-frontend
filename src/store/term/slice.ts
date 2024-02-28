import { createSlice } from "@reduxjs/toolkit";
import { TermState } from "./types";
import { getAllTerms, getDisplayTerms } from "./actions";

const initialState: TermState = {
    terms: [],
    display: [],
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
    },
})

export const { setCurrentTerm } = termSlice.actions

export default termSlice.reducer;