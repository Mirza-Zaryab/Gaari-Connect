import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const passReset = createAsyncThunk('auth/resetPassword/passReset',
    async (params, { dispatch, getState }) => {
        const response = await axios.put('https://api.gariconnect.com:8080/api/auth/resetpassword', params);
        const data = await response.data;

        return data;
    });

export const createPassword = createAsyncThunk('auth/resetPassword/createPassword',
    async (params, { dispatch, getState }) => {
        const response = await axios.put('https://api.gariconnect.com:8080/api/user/createPassword', params);
        const data = await response.data;

        return data;
    });

const initialState = {
    data: [],
    errors: [],
};

const resetPasswordSlice = createSlice({
    name: 'auth/resetPassword',
    initialState,
    reducers: {
        resetData: (state, action) => {
            state.data = action.payload;
        },
        createPass: (state, action) => {
            state.data = action.payload;
        },
        resetPasswordSuccess: (state, action) => {
            state.success = true;
            state.errors = [];
        },
        resetPasswordError: (state, action) => {
            state.success = false;
            state.errors = action.payload;
        },
    },
    extraReducers: {
        [passReset.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = 'success';
        },
        [createPassword.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = 'success';
        },
    },
});

export const { resetData, createPass } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;