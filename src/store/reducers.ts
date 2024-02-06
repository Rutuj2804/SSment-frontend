import { combineReducers } from "@reduxjs/toolkit";
import layout from "./layout/slice"
import settings from "./settings/slice"

export const reducers = combineReducers({
    layout,
    settings
});
