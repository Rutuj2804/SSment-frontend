import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Message, MessageState } from "./types";

const initialState: MessageState = {
    messages: [
        { text: "Successfully started the application.", type: "SUCCESS", _id: "1" },
        { text: "Unauthorized. Contact Administrator.", type: "ERROR", _id: "2" },
    ],
};

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMessage: (state, action: PayloadAction<Message>) => {
            state.messages = [...state.messages, action.payload];
        },
        removeMessage: (state, action: PayloadAction<string>) => {
            state.messages = state.messages.filter(
                (m) => m._id !== action.payload
            );
        },
    },
});

export const { setMessage, removeMessage } = messageSlice.actions;

export default messageSlice.reducer;
