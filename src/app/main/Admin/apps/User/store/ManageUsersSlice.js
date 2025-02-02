import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getManageUsers = createAsyncThunk('userinfo/ManageUsers/getManageUsers', async () => {
  const response = await axios.get('/api/e-commerce-app/ManageUsers');
  const data = await response.data;

  return data;
});

export const removeManageUsers = createAsyncThunk(
  'userinfo/ManageUsers/removeManageUsers',
  async (ManageUserIds, { dispatch, getState }) => {
    await axios.post('/api/e-commerce-app/remove-ManageUsers', { ManageUserIds });

    return ManageUserIds;
  }
);

const ManageUsersAdapter = createEntityAdapter({});

export const { selectAll: selectManageUsers, selectById: selectManageUserById } =
  ManageUsersAdapter.getSelectors((state) => state.userinfo.ManageUsers);

const ManageUsersSlice = createSlice({
  name: 'userinfo/ManageUsers',
  initialState: ManageUsersAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setManageUsersSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getManageUsers.fulfilled]: ManageUsersAdapter.setAll,
    [removeManageUsers.fulfilled]: (state, action) =>
      ManageUsersAdapter.removeMany(state, action.payload),
  },
});

export const { setManageUsersSearchText } = ManageUsersSlice.actions;

export default ManageUsersSlice.reducer;
