import { configureStore } from "@reduxjs/toolkit";
import carDetail from "./carDetailsSlice";
import location from "./locationSlice";
import features from "./featuresSlice";
import guidelines from "./guidelinesSice";
import setAvailability from "./setAvailabilitySlice";
import vehicleimages from "./addImageSlices";
import setPrice from "./setPricesSlice";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  carDetail,
  location,
  features,
  guidelines,
  setAvailability,
  vehicleimages,
  setPrice,
});
