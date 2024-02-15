import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const postPrivateWork = createAsyncThunk(
  "data/postprivateWorkS",
  async ({ work, address, company, phone_number, rate }) => {
    try {
      const response = await axios.post(
        "https://thekkabazar.itnepalsolutions.com/subcontract/apis/private-works/",
        { work, address, company, phone_number, rate }
      );
      const data = response.data;
      // console.log("atasdausdg", data);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const getPrivateWork = createAsyncThunk(
  "data/getprivateWorkS",
  async () => {
    try {
      const response = await axios.get(
        "https://thekkabazar.itnepalsolutions.com/subcontract/apis/private-works/"
      );
      const data = response.data;
      // console.log("atasdausdg", data);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const privateWorkSlice = createSlice({
  name: "privateWork",
  initialState: {
    message: "",
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postPrivateWork.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postPrivateWork.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(postPrivateWork.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getPrivateWork.pending, (state) => {
        state.state = "loading";
      })
      .addCase(getPrivateWork.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getPrivateWork.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default privateWorkSlice.reducer;