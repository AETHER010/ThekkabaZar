// dataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDropdownData = createAsyncThunk(
  "data/fetchDropdownData",
  async () => {
    const response = await axios.get(
      "https://thekkabazar.itnepalsolutions.com/tender/apis/master/list/"
    );
    const data = response.data;
    return data.data;
  }
);

const dropDownSlice = createSlice({
  name: "data",
  initialState: {
    dropdowndata: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDropdownData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDropdownData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dropdowndata = action.payload;
      })
      .addCase(fetchDropdownData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dropDownSlice.reducer;
