import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const verifyOtpData = createAsyncThunk('auth/verifyOtp/verifyOtpData',
    async (dataModel, { dispatch, getState }) => {
        const response = await axios.post('https://api.gariconnect.com:8080/api/auth/verifyotp', dataModel);
        const data = await response.data;
        return data;
    });

const initialState = {
    data: [],
    errors: [],
};

const verifyOtpSlice = createSlice({
    name: 'auth/verifyOtp',
    initialState,
    reducers: {
        checkData: (state, action) => {
            state.data = action.payload
        }
    },
    extraReducers: {
        [verifyOtpData.pending]: (state, action) => {
            state.status = 'loading';
        },
        [verifyOtpData.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = 'success';
        },
        [verifyOtpData.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export const { checkData } = verifyOtpSlice.actions;
export default verifyOtpSlice.reducer;