import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getManageStaffs = createAsyncThunk('staffinfo/ManageStaffs/getManageStaffs', async () => {
  const response = await axios.get('/api/e-commerce-app/ManageStaffs');
  const data = await response.data;

  return data;
});

export const removeManageStaffs = createAsyncThunk(
  'staffinfo/ManageStaffs/removeManageStaffs',
  async (ManageStaffIds, { dispatch, getState }) => {
    await axios.post('/api/e-commerce-app/remove-ManageStaffs', { ManageStaffIds });

    return ManageStaffIds;
  }
);

const ManageStaffsAdapter = createEntityAdapter({});

export const { selectAll: selectManageStaffs, selectById: selectManageStaffById } =
  ManageStaffsAdapter.getSelectors((state) => state.staffinfo.ManageStaffs);

const ManageStaffsSlice = createSlice({
  name: 'staffinfo/ManageStaffs',
  initialState: ManageStaffsAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setManageStaffsSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getManageStaffs.fulfilled]: ManageStaffsAdapter.setAll,
    [removeManageStaffs.fulfilled]: (state, action) =>
      ManageStaffsAdapter.removeMany(state, action.payload),
  },
});

export const { setManageStaffsSearchText } = ManageStaffsSlice.actions;

export default ManageStaffsSlice.reducer;
