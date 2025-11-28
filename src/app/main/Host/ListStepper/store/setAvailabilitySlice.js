import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  days: {
    monday: {
      dayId: "1",
      availability: false,
    },
    tuesday: {
      dayId: "2",
      availability: false,
    },
    wednesday: {
      dayId: "3",
      availability: false,
    },
    thursday: {
      dayId: "4",
      availability: false,
    },
    friday: {
      dayId: "5",
      availability: false,
    },
    saturday: {
      dayId: "6",
      availability: false,
    },
    sunday: {
      dayId: "7",
      availability: false,
    },
  },
};

const availabilitiesSlice = createSlice({
  name: "setAvailability",

  initialState,

  reducers: {
    addDayId: (state, action) => {
      state.days = action.payload;
      // debugger;
    },
  },
});

export const { addDayId } = availabilitiesSlice.actions;
export default availabilitiesSlice.reducer;
