import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  data: {
    makeId: "",
    categoryId: "",
    modelId: "",
    chassis_number: "",
    plate_number: "",
    transmissionId: "",
    vehicle_type_id: "",
    eco_friendly_Id: "",
    description: "",
  },
};

// const getCarModel = createAsyncThunk(  'cardDetails/getCarModels'  ,   ()=>{
//     return
//             axios
//             .get('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => response.data.map(data =>user.)

// }      )

const carDetailsSlice = createSlice({
  name: "carDetails",

  initialState,

  reducers: {
    addMakeId: (state, action) => {
      state.data.makeId = action.payload;
    },
    addCategoryId: (state, action) => {
      state.data.categoryId = action.payload;
    },
    addModelId: (state, action) => {
      state.data.modelId = action.payload;
    },
    addChassisNumber: (state, action) => {
      state.data.chassis_number = action.payload;
    },
    addPlateNumber: (state, action) => {
      state.data.plate_number = action.payload;
    },
    addTransmissionId: (state, action) => {
      state.data.transmissionId = action.payload;
    },
    addVehicleTypeId: (state, action) => {
      state.data.vehicle_type_id = action.payload;
    },
    addEcoFriendlyId: (state, action) => {
      state.data.eco_friendly_Id = action.payload;
    },
    addDescription: (state, action) => {
      state.data.description = action.payload;
    },
    addCar: (state, action) => {
      state.data = action.payload;
      // debugger;
    },
  },
});

export const {
  addCategoryId,
  addDescription,
  addChassisNumber,
  addEcoFriendlyId,
  addMakeId,
  addModelId,
  addPlateNumber,
  addTransmissionId,
  addVehicleTypeId,
  addCar,
} = carDetailsSlice.actions;
export default carDetailsSlice.reducer;
