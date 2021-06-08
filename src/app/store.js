import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/counter/userSlice';
import imagesReducer from '../features/counter/imagesSlice';



export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    image: imagesReducer
  },
});
