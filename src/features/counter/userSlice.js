import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    userName: ''
  },
  reducers: {
    newUser: (state, action) => {
      state.name = action.payload;
    },
    newUserName: (state, action) => {
      state.userName = action.payload
    }
  },
});

export const { newUser, newUserName } = userSlice.actions;

export default userSlice.reducer;
