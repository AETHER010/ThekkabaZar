import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchresultData = createAsyncThunk(
  "data/fetchresultData",
  async () => {
    const response = await axios.get(
      `https://thekkabazar.itnepalsolutions.com/tender/apis/tender-awarded-to/`
    );
    const data = response.data;
    return data;
  }
);

const resultSlice = createSlice({
  name: "card",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchresultData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchresultData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchresultData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default resultSlice.reducer;
