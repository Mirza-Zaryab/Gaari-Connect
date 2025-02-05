import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getManageVehicles = createAsyncThunk('vehicleinfo/ManageVehicles/getManageVehicles', async () => {
  const response = await axios.get('/api/e-commerce-app/ManageVehicles');
  const data = await response.data;

  return data;
});

export const removeManageVehicles = createAsyncThunk(
  'vehicleinfo/ManageVehicles/removeManageVehicles',
  async (ManageVehicleIds, { dispatch, getState }) => {
    await axios.post('/api/e-commerce-app/remove-ManageVehicles', { ManageVehicleIds });

    return ManageVehicleIds;
  }
);

const ManageVehiclesAdapter = createEntityAdapter({});

export const { selectAll: selectManageVehicles, selectById: selectManageVehicleById } =
  ManageVehiclesAdapter.getSelectors((state) => state.vehicleinfo.ManageVehicles);

const ManageVehiclesSlice = createSlice({
  name: 'vehicleinfo/ManageVehicles',
  initialState: ManageVehiclesAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setManageVehiclesSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getManageVehicles.fulfilled]: ManageVehiclesAdapter.setAll,
    [removeManageVehicles.fulfilled]: (state, action) =>
      ManageVehiclesAdapter.removeMany(state, action.payload),
  },
});

export const { setManageVehiclesSearchText } = ManageVehiclesSlice.actions;

export default ManageVehiclesSlice.reducer;
