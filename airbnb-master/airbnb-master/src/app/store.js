import { configureStore } from '@reduxjs/toolkit';
import listingsSlice from '../features/todo/listingsSlice';
export default configureStore({
  reducer:{
   listings:listingsSlice
  }
});