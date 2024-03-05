import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchTenderListData = createAsyncThunk(
  "data/fetchTenderListData",
  async ({
    organization_sector,
    location,
    project_type,
    procurement_type,
    date,
    category,
    page,
  } = {}) => {
    const params = new URLSearchParams();

    if (organization_sector) {
      params.append("organization_sector", organization_sector);
    }

    if (location) {
      params.append("district", location);
    }

    if (project_type) {
      params.append("loproject_typeation", project_type);
    }

    if (procurement_type) {
      params.append("procurement_type", procurement_type);
    }
    if (category) {
      params.append("category", category);
    }
    if (page) {
      params.append("page", page);
    }
    const response = await axios.get(
      `https://product.thekkabazar.com/tender/apis/tender/list/?${params.toString()}`
    );
    const data = response.data;
    return data;
  }
);

export const fetchOneTenderData = createAsyncThunk(
  "data/fetchOneTenderData",
  async ({ tenderId }) => {
    const response = await axios.get(
      `https://product.thekkabazar.com/tender/apis/tenders/${tenderId}/`
    );
    console.log(response);
    const data = response.data;
    return data;
  }
);

export const savebid = createAsyncThunk("data/savebid", async ({ id }) => {
  const response = await axios.get(
    `https://product.thekkabazar.com/tender/apis/tenders/${id}/`
  );
  console.log(response);
  const data = response.data;
  return data;
});

const cardSlice = createSlice({
  name: "card",
  initialState: {
    data: [],
    one: [],
    status: "idle",
    error: null,
    message: "",
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
      })
      .addCase(savebid.pending, (state) => {
        state.status = "loading";
      })
      .addCase(savebid.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(savebid.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default cardSlice.reducer;
