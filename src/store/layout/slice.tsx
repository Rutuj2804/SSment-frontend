import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
    AddQuestionInterface,
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
    question: {
        isActive: false,
        testId: "",
        sectionId: "",
        questionId: {}
    },
    delete: {
        callback: () => {},
        isActive: false,
        text: ""
    },
    confirmation: {
        callback: () => {},
        isActive: false,
        text: ""
    },
    section: {
        isActive: false,
        testId: "",
        sectionId: ""
    },
    submitConfirmation: false
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
        setQuestion: (state, action: PayloadAction<AddQuestionInterface>) => {
            state.backdrop = action.payload.isActive;
            state.popup = action.payload.isActive;
            state.question = action.payload;
        },
        setDeleteConfirmation: (state, action: PayloadAction<DeleteInterface>) => {
            state.backdrop = action.payload.isActive;
            state.popup = action.payload.isActive;
            state.delete = action.payload;
        },
        setConfirmation: (state, action: PayloadAction<DeleteInterface>) => {
            state.backdrop = action.payload.isActive;
            state.popup = action.payload.isActive;
            state.confirmation = action.payload;
        },
        setAddSection: (state, action: PayloadAction<AddSectionInterface>) => {
            state.backdrop = action.payload.isActive;
            state.popup = action.payload.isActive;
            state.section = action.payload;
        },
        setSubmitConfirmation: (state, action: PayloadAction<boolean>) => {
            state.backdrop = action.payload;
            state.popup = action.payload;
            state.submitConfirmation = action.payload;
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
    setAddSection,
    setConfirmation,
    setSubmitConfirmation
} = layoutSlice.actions;

export default layoutSlice.reducer;
