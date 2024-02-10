import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
    LayoutState,
} from "./types";

const initialState: LayoutState = {
    sidebar: true,
    profile: false,
    notifications: false,
};

export const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        setSidebar: (state, action: PayloadAction<boolean>) => {
            state.sidebar = action.payload;
        },
        setProfile: (state, action: PayloadAction<boolean>) => {
            state.profile = action.payload;
        },
        setNotifications: (state, action: PayloadAction<boolean>) => {
            state.notifications = action.payload;
        },
    },
});

export const {
    setSidebar,
    setProfile,
    setNotifications,
} = layoutSlice.actions;

export default layoutSlice.reducer;
