import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const aboutUsform = createAsyncThunk(
  "data/aboutUsform",
  async ({ name, email, phone_number, subject, message }) => {
    console.log(name, email, phone_number, subject, message);
    const response = await axios.post(
      "https://thekkabazar.itnepalsolutions.com/thekkabazar/apis/contactus/",
      { name, email, phone_number, subject, message }
    );
    const data = response.message;
    console.log(data);
    return data;
  }
);

export const aboutUsdata = createAsyncThunk("data/aboutUsdata", async () => {
  try {
    const response = await axios.get(
      " https://thekkabazar.itnepalsolutions.com/thekkabazar/apis/aboutus/"
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw error.message || "Something went wrong!";
  }
});

const aboutUsSlice = createSlice({
  name: "data",
  initialState: {
    message: "",
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(aboutUsform.pending, (state) => {
        state.status = "loading";
      })
      .addCase(aboutUsform.fulfilled, (state, action) => {
        state.status = "succeeded";
        toast.success("Your message has been sent successfully!");
      })
      .addCase(aboutUsform.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(aboutUsdata.pending, (state) => {
        state.status = "loading";
      })
      .addCase(aboutUsdata.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(aboutUsdata.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default aboutUsSlice.reducer;
