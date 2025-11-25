import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  latitude: "",
  longitude: "",
  address: "",
  city: "",
  area: "",
};

const locationSlice = createSlice({
  name: "location",

  initialState,

  reducers: {
    addAddress: (state, action) => {
      state.address = action.payload;
    },
    addLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    addLongitude: (state, action) => {
      state.longitude = action.payload;
    },
    addCity: (state, action) => {
      state.city = action.payload;
    },
    addArea: (state, action) => {
      state.area = action.payload;
    },
  },
});

export const { addAddress, addArea, addCity, addLatitude, addLongitude } =
  locationSlice.actions;
export default locationSlice.reducer;
