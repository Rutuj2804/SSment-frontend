import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { updateLoading } from "../loading/slice";
import { setMessage } from "../messages/slice";
import { errorType } from "../messages/types";
import { CreateTermRequest, GetAllTermsRequest, GetDisplayTermRequest, GetTermRequest, UpdateTermRequest } from "./types";
import axios from "../axios"
import { decrypt, userToken } from "../../utils/helpers";
import { setCurrentTerm } from "./slice";

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

export const updateTerm = createAsyncThunk( "updateTerm/Term", async (data: UpdateTermRequest, thunkAPI) => {
    thunkAPI.dispatch(updateLoading(1));
    try {
        const config = {
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${userToken()}`
            },
        };

        data.termId = decrypt(data.termId)!

        const res = await axios.put(`/institute/t/update/${data.termId}`, data, config);

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

export const getAllTerms = createAsyncThunk( "getAllTerms/Term", async (data: GetAllTermsRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            const res = await axios.put(`/institute/t/get-all`, data, config);

            thunkAPI.dispatch(updateLoading(-1));

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

export const getTerms = createAsyncThunk( "getTerms/Term", async (data: GetTermRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            data.termId = decrypt(data.termId)!

            const res = await axios.put(`/institute/t/get/${data.termId}`, data, config);

            thunkAPI.dispatch(updateLoading(-1));

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

export const deleteTerms = createAsyncThunk( "deleteTerms/Term", async (data: GetTermRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            const res = await axios.put(`/institute/t/delete/${data.termId}`, data, config);

            thunkAPI.dispatch(updateLoading(-1));

            thunkAPI.dispatch(getAllTerms({ status: 1, instituteId: data.instituteId }))

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