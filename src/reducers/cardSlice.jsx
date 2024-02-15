import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchTenderListData = createAsyncThunk(
  "data/fetchTenderListData",
  async () => {
    const response = await axios.get(
      "https://thekkabazar.itnepalsolutions.com/tender/apis/tender/list/"
    );
    const data = response.data;
    return data;
  }
);

export const fetchOneTenderData = createAsyncThunk(
  "data/fetchOneTenderData",
  async ({ tenderId }) => {
    console.log(tenderId);
    const response = await axios.get(
      `https://thekkabazar.itnepalsolutions.com/tender/apis/tenders/${tenderId}/`
    );
    console.log(response);
    const data = response.data;
    return data;
  }
);

const cardSlice = createSlice({
  name: "card",
  initialState: {
    data: [],
    one: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTenderListData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTenderListData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTenderListData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchOneTenderData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOneTenderData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.one = action.payload;
      })
      .addCase(fetchOneTenderData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default cardSlice.reducer;