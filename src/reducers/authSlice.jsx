import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "data/login",
  async ({ username, password }) => {
    const response = await axios.post(
      "https://thekkabazar.itnepalsolutions.com/accounts/apis/usermanagement/login/",
      { username, password }
    );
    const data = response.data;
    return data;
  }
);

export const register = createAsyncThunk(
  "data/register",
  async ({
    username,
    fullname,
    password,
    email,
    password2,
    phone_number,
    company_name,
    office_name,
    office_contact_number,
    district,
    website_url,
    municipality,
    providence,
    pan_vat_certificate,
    company_registration_certificate,
  }) => {
    console.log("Register", username, password, email, password2, phone_number);
    const response = await axios.post(
      "https://thekkabazar.itnepalsolutions.com/accounts/apis/usermanagement/create/user/",
      {
        username,
        fullname,
        password,
        email,
        password2,
        phone_number,
        company_name,
        office_name,
        office_contact_number,
        district,
        website_url,
        municipality,
        providence,
        pan_vat_certificate,
        company_registration_certificate,
      }
    );
    const data = response.data;
    console.log(data);
    return data;
  }
);

const authSlice = createSlice({
  name: "users",
  initialState: {
    access_token: "",
    role: "",
    status: "idle",
    error: null,
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.isAuthenticated = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.access_token = action.payload.access_token;
        state.role = action.payload.role;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.isAuthenticated = false;
      })
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
