import { configureStore } from '@reduxjs/toolkit';
import mediaSlice from './slice/mediaSlice';
import searchSlice from './slice/searchSlice';

const store = configureStore({
  reducer: {
    media: mediaSlice,
    search: searchSlice,
  },
});

export default store;
