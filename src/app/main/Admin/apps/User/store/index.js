import { combineReducers } from '@reduxjs/toolkit';
// import order from './orderSlice';
// import orders from './ordersSlice';
import ManageUser from './ManageUserSlice';
import ManageUsers from './ManageUsersSlice';

const reducer = combineReducers({
  ManageUsers,
  ManageUser,
  // orders,
  // order,
});

export default reducer;
