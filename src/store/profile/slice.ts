import { createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "./types";
import { getProfile, updateUserDetails } from "./actions";

const initialState: ProfileState = {
    user: {}
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getProfile.fulfilled, (s, a) => {
            s.user = a.payload
        })
        builder.addCase(updateUserDetails.fulfilled, (s, a) => {
            s.user = a.payload
        })
    },
})

export default profileSlice.reducer;