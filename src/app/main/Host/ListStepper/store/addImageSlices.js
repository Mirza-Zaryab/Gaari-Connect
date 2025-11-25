import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  images: [],
};

const imagesSlice = createSlice({
  name: "images",

  initialState,

  reducers: {
    addImages: (state, action) => {
      state.images.push(action.payload);
      state.images[0].setCover = "true";
    },
    removeImages: (state, action) => {
      state.images.pop(action.payload);
    },
  },
});

export const { addImages, removeImages } = imagesSlice.actions;
export default imagesSlice.reducer;
