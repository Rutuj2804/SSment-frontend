import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { NavigateFunction } from "react-router-dom";

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface BaseInterface {
    navigate?: NavigateFunction;
}