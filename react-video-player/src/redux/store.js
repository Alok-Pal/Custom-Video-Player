import { configureStore } from '@reduxjs/toolkit';
import mediaSlice from './slice/mediaSlice';

const store = configureStore({
  reducer: {
    media: mediaSlice,
  },
});

export default store;
