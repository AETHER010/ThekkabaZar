import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "data/login",
  async ({ username, password }) => {
    const response = await axios.post(
      "https://thekkabazar.itnepalsolutions.com/accounts/apis/usermanagement/login/",
      { username, password }
    );
    const data = response.message;
    return data;
  }
);

const authSlice = createSlice({
  name: "users",
  initialState: {
    data: "",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
