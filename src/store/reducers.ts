import { combineReducers } from "@reduxjs/toolkit";
import layout from "./layout/slice"
import settings from "./settings/slice"
import breadcrumps from "./breadcrumps/slice"
import messages from "./messages/slice"
import loading from "./loading/slice"
import authentication from "./authentication/slice"
import profile from "./profile/slice"

export const reducers = combineReducers({
    layout,
    settings,
    breadcrumps,
    messages,
    loading,
    authentication,
    profile
});
