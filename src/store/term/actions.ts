import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { updateLoading } from "../loading/slice";
import { setMessage } from "../messages/slice";
import { errorType } from "../messages/types";
import { CreateTermRequest, GetDisplayTermRequest } from "./types";
import axios from "../axios"
import { userToken } from "../../utils/helpers";
import { setCurrentTerm } from "./slice";
import { getMyRole } from "../actions";

export const createTerm = createAsyncThunk( "createTerm/Term", async (data: CreateTermRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            const res = await axios.post(`/institute/t/create`, data, config);

            thunkAPI.dispatch(updateLoading(-1));

            thunkAPI.dispatch(
                setMessage({
                    text: res.data.message,
                    type: errorType.SUCCESS,
                    _id: Date.now().toString(),
                })
            );

            if(data.navigate) data.navigate("/terms")

            return res.data.data;
        } catch (err) {
            thunkAPI.dispatch(updateLoading(-1));

            if (err instanceof AxiosError) {
                if(Array.isArray(err?.response?.data.message)) {
                    thunkAPI.dispatch(
                        setMessage({
                            text: err?.response?.data.message[0],
                            type: errorType.ERROR,
                            _id: Date.now().toString(),
                        })
                    );
                } else {
                    thunkAPI.dispatch(
                        setMessage({
                            text: err?.response?.data.message,
                            type: errorType.ERROR,
                            _id: Date.now().toString(),
                        })
                    );
                }
            }

            return thunkAPI.rejectWithValue(err);
        }
    }
);

export const getDisplayTerms = createAsyncThunk( "getDisplayTerms/Term", async (data: GetDisplayTermRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            const res = await axios.put(`/institute/t/get-my`, data, config);

            thunkAPI.dispatch(updateLoading(-1));

            if(res.data.data.length) {
                thunkAPI.dispatch(setCurrentTerm(res.data.data[0]._id))
                thunkAPI.dispatch(getMyRole({ termId: res.data.data[0]._id }))
            }

            return res.data.data;
        } catch (err) {
            thunkAPI.dispatch(updateLoading(-1));

            if (err instanceof AxiosError) {
                if(Array.isArray(err?.response?.data.message)) {
                    thunkAPI.dispatch(
                        setMessage({
                            text: err?.response?.data.message[0],
                            type: errorType.ERROR,
                            _id: Date.now().toString(),
                        })
                    );
                } else {
                    thunkAPI.dispatch(
                        setMessage({
                            text: err?.response?.data.message,
                            type: errorType.ERROR,
                            _id: Date.now().toString(),
                        })
                    );
                }
            }

            return thunkAPI.rejectWithValue(err);
        }
    }
);