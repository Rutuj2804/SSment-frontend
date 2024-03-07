import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
    AddSectionInterface,
    DeleteInterface,
    LayoutState,
} from "./types";

const initialState: LayoutState = {
    sidebar: true,
    profile: false,
    notifications: false,
    backdrop: false,
    popup: false,
    search: false,
    question: false,
    delete: {
        callback: () => {},
        isActive: false,
        text: ""
    },
    section: {
        isActive: false,
        testId: "",
        sectionId: ""
    }
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
        setSearch: (state, action: PayloadAction<boolean>) => {
            state.backdrop = action.payload;
            state.popup = action.payload;
            state.search = action.payload;
        },
        setQuestion: (state, action: PayloadAction<boolean>) => {
            state.backdrop = action.payload;
            state.popup = action.payload;
            state.question = action.payload;
        },
        setDeleteConfirmation: (state, action: PayloadAction<DeleteInterface>) => {
            state.backdrop = action.payload.isActive;
            state.popup = action.payload.isActive;
            state.delete = action.payload;
        },
        setAddSection: (state, action: PayloadAction<AddSectionInterface>) => {
            state.backdrop = action.payload.isActive;
            state.popup = action.payload.isActive;
            state.section = action.payload;
        }
    },
});

export const {
    setSidebar,
    setProfile,
    setNotifications,
    setSearch,
    setQuestion,
    setDeleteConfirmation,
    setAddSection
} = layoutSlice.actions;

export default layoutSlice.reducer;
