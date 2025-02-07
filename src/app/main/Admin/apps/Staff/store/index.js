import { combineReducers } from '@reduxjs/toolkit';
// import order from './orderSlice';
// import orders from './ordersSlice';
import ManageStaff from './ManageStaffSlice';
import ManageStaffs from './ManageStaffsSlice';

const reducer = combineReducers({
  ManageStaffs,
  ManageStaff,
  // orders,
  // order,
});

export default reducer;
