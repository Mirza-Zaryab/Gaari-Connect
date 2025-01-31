import { combineReducers } from '@reduxjs/toolkit';
// import order from './orderSlice';
// import orders from './ordersSlice';
import ManageVehicle from './ManageVehicleSlice';
import ManageVehicles from './ManageVehiclesSlice';

const reducer = combineReducers({
  ManageVehicles,
  ManageVehicle,
  // orders,
  // order,
});

export default reducer;
