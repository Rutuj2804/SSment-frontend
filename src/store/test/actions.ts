import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { updateLoading } from "../loading/slice";
import { setMessage } from "../messages/slice";
import { errorType } from "../messages/types";
import { ChangeStatusRequest, CreateSectionRequest, CreateTestRequest, DeleteSectionRequest, GetAllTestsRequest, GetSectionsOfTestSectionRequest, GetTestDetailsRequest, UpdateSectionRequest } from "./types";
import axios from "../axios"
import { decrypt, userToken } from "../../utils/helpers";

export const createTest = createAsyncThunk( "createTest/Test", async (data: CreateTestRequest, thunkAPI) => {
    thunkAPI.dispatch(updateLoading(1));
    try {
        const config = {
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${userToken()}`
            },
        };

        const res = await axios.post(`/test/t/create`, data, config);

        thunkAPI.dispatch(updateLoading(-1));

        if(data.navigate) data.navigate("/tests")

        thunkAPI.dispatch(
            setMessage({
                text: res.data.message,
                type: errorType.SUCCESS,
                _id: Date.now().toString(),
            })
        );

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

export const getTestDetails = createAsyncThunk( "getTestDetails/Test", async (data: GetTestDetailsRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            data.testId = decrypt(data.testId)!

            const res = await axios.put(`/test/t/get/${data.testId}`, data, config);

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

export const getAllTests = createAsyncThunk( "getAllTests/Test", async (data: GetAllTestsRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            const res = await axios.put(`/test/t/get-all`, data, config);

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

export const changeStatus = createAsyncThunk( "changeStatus/Test", async (data: ChangeStatusRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            data.testId = decrypt(data.testId)!

            const res = await axios.put(`/test/t/change-status/${data.testId}`, data, config);

            thunkAPI.dispatch(updateLoading(-1));

            thunkAPI.dispatch(
                setMessage({
                    text: res.data.message,
                    type: errorType.SUCCESS,
                    _id: Date.now().toString(),
                })
            );

            if(data.navigate) data.navigate("/tests")
            
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

export const createSection = createAsyncThunk( "createSection/Test", async (data: CreateSectionRequest, thunkAPI) => {
    thunkAPI.dispatch(updateLoading(1));
    try {
        const config = {
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${userToken()}`
            },
        };

        data.testId = decrypt(data.testId)!

        const res = await axios.post(`/test/s/create`, data, config);

        thunkAPI.dispatch(updateLoading(-1));

        thunkAPI.dispatch(
            setMessage({
                text: res.data.message,
                type: errorType.SUCCESS,
                _id: Date.now().toString(),
            })
        );

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

export const updateSection = createAsyncThunk( "updateSection/Test", async (data: UpdateSectionRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            const res = await axios.put(`/test/s/update/${data.sectionId}`, data, config);

            thunkAPI.dispatch(updateLoading(-1));

            thunkAPI.dispatch(
                setMessage({
                    text: res.data.message,
                    type: errorType.SUCCESS,
                    _id: Date.now().toString(),
                })
            );

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

export const getSectionsOfTest = createAsyncThunk( "getSectionsOfTest/Test", async (data: GetSectionsOfTestSectionRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            data.testId = decrypt(data.testId)!

            const res = await axios.put(`/test/s/get/t/${data.testId}`, data, config);

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

export const deleteSection = createAsyncThunk( "deleteSection/Test", async (data: DeleteSectionRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            const res = await axios.put(`/test/s/delete/${data.sectionId}`, data, config);

            thunkAPI.dispatch(updateLoading(-1));

            thunkAPI.dispatch(
                setMessage({
                    text: res.data.message,
                    type: errorType.SUCCESS,
                    _id: Date.now().toString(),
                })
            );

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