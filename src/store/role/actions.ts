import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { updateLoading } from "../loading/slice";
import { setMessage } from "../messages/slice";
import { errorType } from "../messages/types";
import axios from "../axios"
import { decrypt, userToken } from "../../utils/helpers";
import { CreateRoleAssignmentRequest, CreateRoleDefinitionRequest, DeleteRoleDefinitionRequest, GetAllRoleAssignmentsRequest, GetAllRoleDefinitionsRequest, GetRoleRequest, UpdateRoleDefinitionRequest } from "./types";
import { BaseInterface } from "..";

export const createRoleDefinition = createAsyncThunk( "createRoleDefinition/Role", async (data: CreateRoleDefinitionRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            const res = await axios.post(`/role/d/create`, data, config);

            thunkAPI.dispatch(updateLoading(-1));

            if(data.navigate) data.navigate("/roles")

            return res.data;
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

export const updateRoleDefinition = createAsyncThunk( "updateRoleDefinition/Role", async (data: UpdateRoleDefinitionRequest, thunkAPI) => {
    thunkAPI.dispatch(updateLoading(1));
    try {
        const config = {
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${userToken()}`
            },
        };
        
        data.roleId = decrypt(data.roleId)!

        const res = await axios.put(`/role/d/update/${data.roleId}`, data, config);

        thunkAPI.dispatch(updateLoading(-1));

        if(data.navigate) data.navigate("/roles")

        return res.data;
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

export const deleteRoleDefinition = createAsyncThunk( "deleteRoleDefinition/Role", async (data: DeleteRoleDefinitionRequest, thunkAPI) => {
    thunkAPI.dispatch(updateLoading(1));
    try {
        const config = {
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${userToken()}`
            },
        };

        const res = await axios.put(`/role/d/delete/${data.roleId}`, data, config);

        thunkAPI.dispatch(updateLoading(-1));

        thunkAPI.dispatch(getAllRoleDefinitions({ instituteId: data.instituteId, status: 1 }))

        return res.data;
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

export const getAllRoleDefinitions = createAsyncThunk( "getAllRoleDefinitions/Role", async (data: GetAllRoleDefinitionsRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            const res = await axios.put(`/role/d/get-all`, data, config);

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

export const getRole = createAsyncThunk( "getRole/Role", async (data: GetRoleRequest, thunkAPI) => {
    thunkAPI.dispatch(updateLoading(1));
    try {
        const config = {
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${userToken()}`
            },
        };

        data.roleId = decrypt(data.roleId)!

        const res = await axios.put(`/role/d/get/${data.roleId}`, data, config);

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

export const getMyRole = createAsyncThunk( "getMyRole/Role", async (data: BaseInterface, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            const res = await axios.put(`/role/a/get-my`, data, config);

            thunkAPI.dispatch(updateLoading(-1));

            return res.data;
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

export const createRoleAssignment = createAsyncThunk( "createRoleAssignment/Role", async (data: CreateRoleAssignmentRequest, thunkAPI) => {
    thunkAPI.dispatch(updateLoading(1));
    try {
        const config = {
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${userToken()}`
            },
        };

        const res = await axios.post(`/role/a/create`, data, config);

        thunkAPI.dispatch(updateLoading(-1));

        thunkAPI.dispatch(
            setMessage({
                text: res.data.message,
                type: errorType.SUCCESS,
                _id: Date.now().toString(),
            })
        );

        if(data.navigate) data.navigate("/assignments")

        return res.data;
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

export const getAllRoleAssignments = createAsyncThunk( "getAllRoleAssignments/Role", async (data: GetAllRoleAssignmentsRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            const res = await axios.put(`/role/a/get-all`, data, config);

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

export const getRoleAssignment = createAsyncThunk( "getRoleAssignment/Role", async (data: GetRoleRequest, thunkAPI) => {
        thunkAPI.dispatch(updateLoading(1));
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${userToken()}`
                },
            };

            data.roleId = decrypt(data.roleId)!

            const res = await axios.put(`/role/a/get/${data.roleId}`, data, config);

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