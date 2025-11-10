import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';


export const getContacts = createAsyncThunk(
  'CarsListing/providers/getContacts',
  async (params, { getState }) => {
    const response = await axios.get('https://api.gariconnect.com:8080/api/vehicle/all');
    const data = await response.data;
    return data;
  }
);

const providersAdapter = createEntityAdapter({
  selectId: (state) => console.log('OKK: ', state)
});

export const { selectAll: selectContacts, selectById: selectContactsById } =
  providersAdapter.getSelectors((state) => state.CarsListing.cars);

const CarsListingSlice = createSlice({
  name: 'CarsListing/cars',
  initialState: providersAdapter.getInitialState({

  }),
  reducers: {
  },
  extraReducers: {
    [getContacts.fulfilled]: (state, action) => {
      const data = action.payload;
      console.log('Hello');
      providersAdapter.setAll(state, data);
    },
  },
});

export default CarsListingSlice.reducer;