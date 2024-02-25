import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationState } from "./types";
import { createContact } from "./actions";

const initialState: AuthenticationState = {}

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(createContact.fulfilled, (s, a) => {})
    },
})

export const {} = authenticationSlice.reducer

export default authenticationSlice.reducer;