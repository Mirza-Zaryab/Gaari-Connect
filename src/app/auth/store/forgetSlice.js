import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendOtp = createAsyncThunk('auth/forget/sendOtp',
    async (phone, { dispatch, getState }) => {
        const response = await axios.post('https://api.gariconnect.com:8080/api/auth/forgotpassword', phone);
        const data = await response.data;

        return data;
    });

export const otpViaCall = createAsyncThunk('auth/forget/otpViaCall',
    async (phone, { dispatch, getState }) => {
        const response = await axios.post('https://api.gariconnect.com:8080/api/auth/makecall', phone);
        const data = await response.data;

        return data;
    });

export const otpViaWhatsapp = createAsyncThunk('auth/forget/otpViaWhatsapp',
    async (phone, { dispatch, getState }) => {
        const response = await axios.post('https://api.gariconnect.com:8080/api/auth/whatsapp', phone);
        const data = await response.data;

        return data;
    });

const initialState = {
    data: [],
    errors: [],
};

const forgetSlice = createSlice({
    name: 'auth/forget',
    initialState,
    reducers: {
        otpData: (state, action) => {
            state.data = action.payload;
        },
        otpSuccess: (state, action) => {
            state.success = true;
            state.errors = [];
        },
        otpError: (state, action) => {
            state.success = false;
            state.errors = action.payload;
        },
    },
    extraReducers: {
        [sendOtp.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = 'success';
        },
        [otpViaCall.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = 'success';
        },
        [otpViaWhatsapp.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = 'success';
        },
    },
});

export const { otpData, otpSuccess, otpError } = forgetSlice.actions;
export default forgetSlice.reducer;