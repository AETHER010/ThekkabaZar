// dataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNoticeData = createAsyncThunk(
  "data/fetchNoticeData",
  async () => {
    const response = await axios.get(
      "https://product.thekkabazar.com/tender/apis/tender-notice/"
    );
    const data = response.data;
    return data;
  }
);

const noticeSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNoticeData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNoticeData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchNoticeData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default noticeSlice.reducer;
