import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  guidelines: {
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

const guidelinesSlice = createSlice({
  name: "guidelines",

  initialState,

  reducers: {
    addGuidelines: (state, action) => {
      state.guidelines = action.payload;
    },
  },
});

export const { addGuidelines } = guidelinesSlice.actions;
export default guidelinesSlice.reducer;
