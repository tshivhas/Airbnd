import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


let initialState = {
     isLoading: false,
     data:[],
     error:false
}

export const FetchListings = createAsyncThunk("fetchListings", async ()=>{
  const response = await axios.get("http://localhost:3000/listing");
  return response.data
})

export const listingsSlice = createSlice(
    {
     name: "listings",
     initialState :initialState,
     extraReducers: (builder)=>{
       builder.addCase(FetchListings.pending, (state,action)=>{
        console.log("pending")
        state.isLoading = true
       })

       builder.addCase(FetchListings.fulfilled, (state,action)=>{
        console.log("done")
        state.isLoading = false;
        state.data = action.payload;
        state.error = false
       })

       builder.addCase(FetchListings.rejected, (state,action)=>{
        console.log("error")
        state.error = true
       })
     }
});

export default listingsSlice.reducer;
