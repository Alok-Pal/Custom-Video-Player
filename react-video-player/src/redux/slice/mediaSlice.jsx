import { createSlice } from '@reduxjs/toolkit';

const mediaSlice = createSlice({
  name: 'media',
  initialState: {
    categories: [],
  },
  reducers: {
    setMediaData: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setMediaData } = mediaSlice.actions;
// export const selectMediaData = (state) => state.media.categories;

export default mediaSlice.reducer;
