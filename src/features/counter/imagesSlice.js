import { createSlice } from '@reduxjs/toolkit';

export const imagesSlice = createSlice({
  name: 'image',
  initialState: {
    array: [],
    downloaded: false,
    isEmpty: ''
  },
  reducers: {
    newImage: (state, action) => {
      state.array = action.payload;
    },
    pushImage: (state, action) => {
      state.array.push(action.payload)
    },
    setDownloaded: (state, action) => {
      state.downloaded = action.payload
    },
    // deleteImg: (state, action) => {
    //   state.array.splice(action.payload, 1)
    // },
    setIsEmpty: (state, action) => {
      state.isEmpty = action.payload
    },
  },
});

export const { newImage, pushImage, setDownloaded, setIsEmpty } = imagesSlice.actions;

export default imagesSlice.reducer;
