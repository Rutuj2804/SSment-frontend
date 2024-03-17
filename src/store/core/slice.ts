import { createSlice } from "@reduxjs/toolkit";
import { CoreState } from "./types";
import { getNotifications } from "./actions";

const initialState: CoreState = {
    notifications: []
};

export const coreSlice = createSlice({
	name: "core",
	initialState,
	reducers: {},
	extraReducers(builder) {
        builder.addCase(getNotifications.fulfilled, (s, a) => {
            s.notifications = a.payload
        })
    },
});

export const {} = coreSlice.actions;

export default coreSlice.reducer;
