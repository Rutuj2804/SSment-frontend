import { createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "./types";
import { getProfile, getUserProfile, updateUserDetails } from "./actions";

const initialState: ProfileState = {
    user: {},
    display: {}
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getProfile.fulfilled, (s, a) => {
            s.user = a.payload
        })
        builder.addCase(getUserProfile.fulfilled, (s, a) => {
            s.display = a.payload
        })
        builder.addCase(updateUserDetails.fulfilled, (s, a) => {
            s.user = a.payload
        })
    },
})

export default profileSlice.reducer;