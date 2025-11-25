import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  pricePerDay: '',
  price_inc_driver: 0,
  additional_Price: '',
  with_driver: 'true',
  pickAndDrop: 'true',
  price: '0',
};

// "price": "8000000",
// "price_inc_driver": "9000000",
// "with_driver": "false",
// "pickAndDrop": "false",
// "additional_Price": "2000",
// "created_by": "1"

const priceSlice = createSlice({
  name: "price",

  initialState,

  reducers: {
    addPrice: (state, action) => {
      state.price = action.payload;
    },
    addPricePerDay: (state, action) => {
      state.pricePerDay = action.payload;
    },
    addPrice_inc_driver: (state, action) => {
      state.price_inc_driver = action.payload;
    },
    addAdditional_Price: (state, action) => {
      state.additional_Price = action.payload;
    },
    addWith_driver: (state, action) => {
      state.with_driver = action.payload;
    },
    addPickAndDrop: (state, action) => {
      state.pickAndDrop = action.payload;
      console.log("ye rha state", state);
    },
  },
});

export const {
  addAdditional_Price,
  addPickAndDrop,
  addPrice,
  addPricePerDay,
  addPrice_inc_driver,
  addWith_driver,
} = priceSlice.actions;
export default priceSlice.reducer;
