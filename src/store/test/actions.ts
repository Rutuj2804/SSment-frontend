import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { updateLoading } from "../loading/slice";
import { setMessage } from "../messages/slice";
import { errorType } from "../messages/types";
import { ChangeStatusRequest, CreateQuestionRequest, CreateSectionRequest, CreateTestRequest, DeleteQuestionRequest, DeleteSectionRequest, DeleteTestRequest, GetAllTestsRequest, GetQuestionsOfSectionRequest, GetQuestionsOfTestRequest, GetSectionsOfTestSectionRequest, GetTestDetailsRequest, LoadTestRequest, UpdateQuestionRequest, UpdateSectionRequest, UpdateTestRequest, UpdateTestResponseRequest } from "./types";
import axios from "../axios"
import { decrypt, encrypt, userToken } from "../../utils/helpers";
import { setFailedResponse } from "./slice";

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

export const updateTest = createAsyncThunk( "updateTest/Test", async (data: UpdateTestRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            data.testId = decrypt(data.testId)!

            const res = await axios.put(`/test/t/update/${data.testId}`, data, config);

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

export const getTestRegistrationDetails = createAsyncThunk( "getTestRegistrationDetails/Test", async (data: GetTestDetailsRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            data.testId = decrypt(data.testId)!

            const res = await axios.put(`/test/t/get-reg/${data.testId}`, data, config);

            thunkAPI.dispatch(updateLoading(-1));
            
            return res.data.data;
        } catch (err) {
            thunkAPI.dispatch(updateLoading(-1));

            if (err instanceof AxiosError) {

                // if(err?.response?.data.statusCode === 404) data.navigate!("/404")

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

export const getAllTestRegistrations = createAsyncThunk( "getAllTestRegistrations/Test", async (data: GetAllTestsRequest, thunkAPI) => {
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

export const deleteTest = createAsyncThunk( "deleteTest/Test", async (data: DeleteTestRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            const res = await axios.put(`/test/t/delete/${data.testId}`, data, config);

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

export const loadTest = createAsyncThunk( "loadTest/Test", async (data: LoadTestRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            data.testId = decrypt(data.testId)!

            const res = await axios.put(`/test/t/load/${data.testId}`, data, config);

            thunkAPI.dispatch(updateLoading(-1));

            if(data.navigate) data.navigate(`/attempt-test/${encrypt(data.testId)}`)
            
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

export const updateTestResponse = createAsyncThunk( "updateTestResponse/Test", async (data: UpdateTestResponseRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            if(data.response.length === 0) return null;

            data.testId = decrypt(data.testId)!

            const res = await axios.put(`/test/t/update-test-response`, data, config);

            thunkAPI.dispatch(updateLoading(-1));
            
            return res.data.data;
        } catch (err) {
            thunkAPI.dispatch(updateLoading(-1));

            thunkAPI.dispatch(setFailedResponse(data.response))

            return thunkAPI.rejectWithValue(err);
        }
    }
);

export const updateFailedTestResponse = createAsyncThunk( "updateFailedTestResponse/Test", async (data: UpdateTestResponseRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            if(data.response.length === 0) return null;

            data.testId = decrypt(data.testId)!

            const res = await axios.put(`/test/t/update-test-response`, data, config);

            thunkAPI.dispatch(updateLoading(-1));
            
            return res.data.data;
        } catch (err) {
            thunkAPI.dispatch(updateLoading(-1));

            thunkAPI.dispatch(setFailedResponse(data.response))

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

export const getQuestionsOfSection = createAsyncThunk( "getQuestionsOfSection/Test", async (data: GetQuestionsOfSectionRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            const res = await axios.put(`/test/q/get/s/${data.sectionId}`, data, config);

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

export const getQuestionsOfTest = createAsyncThunk( "getQuestionsOfTest/Test", async (data: GetQuestionsOfTestRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            data.testId = decrypt(data.testId)!

            const res = await axios.put(`/test/q/get/t/${data.testId}`, data, config);

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

export const createQuestion = createAsyncThunk( "createQuestion/Test", async (data: CreateQuestionRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            data.testId = decrypt(data.testId)!

            const res = await axios.post(`/test/q/create`, data, config);

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

export const updateQuestion = createAsyncThunk( "updateQuestion/Test", async (data: UpdateQuestionRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            data.testId = decrypt(data.testId)!

            const res = await axios.put(`/test/q/update/${data.questionId}`, data, config);

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

export const deleteQuestion = createAsyncThunk( "deleteQuestion/Test", async (data: DeleteQuestionRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            const res = await axios.put(`/test/q/delete/${data.questionId}`, data, config);

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