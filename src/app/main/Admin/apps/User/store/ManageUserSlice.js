import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';

export const getManageUser = createAsyncThunk('userinfo/ManageUser/getManageUser', async (params) => {
  const response = await axios.get('/api/e-commerce-app/ManageUser', { params });
  const data = await response.data;

  return data === undefined ? null : data;
});

export const removeManageUser = createAsyncThunk(
  'userinfo/ManageUser/removeManageUser',
  async (val, { dispatch, getState }) => {
    const { id } = getState().userinfo.ManageUser;
    await axios.post('/api/e-commerce-app/remove-ManageUser', { id });

    return id;
  }
);

export const saveManageUser = createAsyncThunk(
  'userinfo/ManageUser/saveManageUser',
  async (ManageUserData, { dispatch, getState }) => {
    const { ManageUser } = getState().userinfo;

    const response = await axios.post('/api/e-commerce-app/ManageUser/save', {
      ...ManageUser,
      ...ManageUserData,
    });
    const data = await response.data;

    return data;
  }
);

const ManageUserSlice = createSlice({
  name: 'userinfo/ManageUser',
  initialState: null,
  reducers: {
    resetManageUser: () => null,
    newManageUser: {
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
    [getManageUser.fulfilled]: (state, action) => action.payload,
    [saveManageUser.fulfilled]: (state, action) => action.payload,
    [removeManageUser.fulfilled]: (state, action) => null,
  },
});

export const { newManageUser, resetManageUser } = ManageUserSlice.actions;

export default ManageUserSlice.reducer;
