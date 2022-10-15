import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: filterInitialState },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'filter',
  storage,
  whitelist: ['filter'],
};

export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);

export const { filterContacts } = filterSlice.actions;
