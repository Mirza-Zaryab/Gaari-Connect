import { combineReducers } from '@reduxjs/toolkit';
import login from './loginSlice';
import register from './registerSlice';
import user from './userSlice';
import forget from './forgetSlice';
import verify from './verifyOtpSlice';
import resetPassword from './resetPasswordSlice';

const authReducers = combineReducers({
  user,
  login,
  register,
  forget,
  verify,
  resetPassword,
});

export default authReducers;
