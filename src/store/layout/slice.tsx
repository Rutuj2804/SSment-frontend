import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
    LayoutState,
} from "./types";

const initialState: LayoutState = {
    sidebar: true,
};

export const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        setSidebar: (state, action: PayloadAction<boolean>) => {
            state.sidebar = action.payload;
        },
    },
});

export const {
    setSidebar,
} = layoutSlice.actions;

export default layoutSlice.reducer;
