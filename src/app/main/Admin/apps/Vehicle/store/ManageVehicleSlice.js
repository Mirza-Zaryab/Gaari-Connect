import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';

export const getManageVehicle = createAsyncThunk('vehicleinfo/ManageVehicle/getManageVehicle', async (params) => {
  const response = await axios.get('/api/e-commerce-app/ManageVehicle', { params });
  const data = await response.data;

  return data === undefined ? null : data;
});

export const removeManageVehicle = createAsyncThunk(
  'vehicleinfo/ManageVehicle/removeManageVehicle',
  async (val, { dispatch, getState }) => {
    const { id } = getState().vehicleinfo.ManageVehicle;
    await axios.post('/api/e-commerce-app/remove-ManageVehicle', { id });

    return id;
  }
);

export const saveManageVehicle = createAsyncThunk(
  'vehicleinfo/ManageVehicle/saveManageVehicle',
  async (ManageVehicleData, { dispatch, getState }) => {
    const { ManageVehicle } = getState().vehicleinfo;

    const response = await axios.post('/api/e-commerce-app/ManageVehicle/save', {
      ...ManageVehicle,
      ...ManageVehicleData,
    });
    const data = await response.data;

    return data;
  }
);

const ManageVehicleSlice = createSlice({
  name: 'vehicleinfo/ManageVehicle',
  initialState: null,
  reducers: {
    resetManageVehicle: () => null,
    newManageVehicle: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          id: FuseUtils.generateGUID(),
          name: '',
          handle: '',
          description: '',
          categories: [],
          tags: [],
          images: [],
          priceTaxExcl: 0,
          priceTaxIncl: 0,
          taxRate: 0,
          comparedPrice: 0,
          quantity: 0,
          sku: '',
          width: '',
          height: '',
          depth: '',
          weight: '',
          extraShippingFee: 0,
          active: true,
        },
      }),
    },
  },
  extraReducers: {
    [getManageVehicle.fulfilled]: (state, action) => action.payload,
    [saveManageVehicle.fulfilled]: (state, action) => action.payload,
    [removeManageVehicle.fulfilled]: (state, action) => null,
  },
});

export const { newManageVehicle, resetManageVehicle } = ManageVehicleSlice.actions;

export default ManageVehicleSlice.reducer;
