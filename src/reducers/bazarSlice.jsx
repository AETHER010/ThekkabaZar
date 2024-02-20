// dataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchbazarData = createAsyncThunk(
  "data/fetchbazarData",
  async () => {
    const response = await axios.get(
      "https://thekkabazar.itnepalsolutions.com/products/apis/products/category/list/"
    );
    const data = response.data;
    return data;
  }
);

const bazarSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchbazarData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchbazarData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchbazarData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default bazarSlice.reducer;
