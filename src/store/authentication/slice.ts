import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationState } from "./types";
import { login } from "./actions";

const initialState: AuthenticationState = {
    isAuthenticated: false
}

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(login.fulfilled, (s, a) => {
            s.isAuthenticated = true
            localStorage.setItem("ssment-frag-granade", a.payload.token)
        })
    },
})

export const {} = authenticationSlice.reducer

export default authenticationSlice.reducer;