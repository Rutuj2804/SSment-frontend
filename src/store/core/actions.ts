import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateLoading } from "../loading/slice";
import axios from "../axios"
import { userToken } from "../../utils/helpers";

export const getNotifications = createAsyncThunk( "getNotifications/Core", async (_, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            const res = await axios.get(`/core/n/get-my`, config);

            thunkAPI.dispatch(updateLoading(-1));

            return res.data.data;
        } catch (err) {
            thunkAPI.dispatch(updateLoading(-1));

            return thunkAPI.rejectWithValue(err);
        }
    }
);