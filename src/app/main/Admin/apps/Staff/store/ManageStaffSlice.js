import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';

export const getManageStaff = createAsyncThunk('staffinfo/ManageStaff/getManageStaff', async (params) => {
  const response = await axios.get('/api/e-commerce-app/ManageStaff', { params });
  const data = await response.data;

  return data === undefined ? null : data;
});

export const removeManageStaff = createAsyncThunk(
  'staffinfo/ManageStaff/removeManageStaff',
  async (val, { dispatch, getState }) => {
    const { id } = getState().staffinfo.ManageStaff;
    await axios.post('/api/e-commerce-app/remove-ManageStaff', { id });

    return id;
  }
);

export const saveManageStaff = createAsyncThunk(
  'staffinfo/ManageStaff/saveManageStaff',
  async (ManageStaffData, { dispatch, getState }) => {
    const { ManageStaff } = getState().staffinfo;

    const response = await axios.post('/api/e-commerce-app/ManageStaff/save', {
      ...ManageStaff,
      ...ManageStaffData,
    });
    const data = await response.data;

    return data;
  }
);

const ManageStaffSlice = createSlice({
  name: 'staffinfo/ManageStaff',
  initialState: null,
  reducers: {
    resetManageStaff: () => null,
    newManageStaff: {
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
    [getManageStaff.fulfilled]: (state, action) => action.payload,
    [saveManageStaff.fulfilled]: (state, action) => action.payload,
    [removeManageStaff.fulfilled]: (state, action) => null,
  },
});

export const { newManageStaff, resetManageStaff } = ManageStaffSlice.actions;

export default ManageStaffSlice.reducer;
