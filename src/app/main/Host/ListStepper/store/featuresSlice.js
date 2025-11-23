import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  mandatoryFeatures: {
    fueltype: "",
    kmpl: "",
    doors: "",
    seats: "",
  },

  featuresList: {
    blueTooth: {
      id: 1,
      availability: false,
    },
    keylessEntry: {
      id: 2,
      availability: false,
    },
    appleCar: {
      id: 3,
      availability: false,
    },
    USB: {
      id: 4,
      availability: false,
    },
    backupCamera: {
      id: 5,
      availability: false,
    },
    auxInput: {
      id: 6,
      availability: false,
    },
    tollPass: {
      id: 7,
      availability: false,
    },
    heatedSeat: {
      id: 8,
      availability: false,
    },
    sunRoof: {
      id: 9,
      availability: false,
    },
    wheelDriver: {
      id: 10,
      availability: false,
    },
    GPS: {
      id: 11,
      availability: false,
    },
    auxInput2: {
      id: 12,
      availability: false,
    },
  },
};

const featuresSlice = createSlice({
  name: "features",

  initialState,

  reducers: {
    addFeatures: (state, action) => {
      state.featuresList = action.payload;
    },
    addFeulType: (state, action) => {
      // debugger;
      state.mandatoryFeatures.fueltype = action.payload;
    },
    addKmpl: (state, action) => {
      state.mandatoryFeatures.kmpl = action.payload;
    },
    addDoors: (state, action) => {
      state.mandatoryFeatures.doors = action.payload;
    },
    addSeats: (state, action) => {
      state.mandatoryFeatures.seats = action.payload;
    },
  },
});

export const { addFeatures, addDoors, addFeulType, addKmpl, addSeats } =
  featuresSlice.actions;
export default featuresSlice.reducer;
