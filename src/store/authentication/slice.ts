import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationState } from "./types";
import { login } from "./actions";

const initialState: AuthenticationState = {
    isAuthenticated: null
}

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        updateAuthenticationState: (s, a) => {
            s.isAuthenticated = a.payload
        },
    },
    extraReducers(builder) {
        builder.addCase(login.fulfilled, (s, a) => {
            s.isAuthenticated = true
            localStorage.setItem("ssment-frag-granade", a.payload.token)
        })
    },
})

export const { updateAuthenticationState } = authenticationSlice.actions

export default authenticationSlice.reducer;