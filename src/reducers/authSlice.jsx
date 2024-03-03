import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const login = createAsyncThunk(
  "data/login",
  async ({ username, password }) => {
    const response = await axios.post(
      "https://thekkabazar.com/accounts/apis/usermanagement/login/",
      { username, password }
    );
    const data = response.data;
    Cookies.set("access_token", data.access_token);
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
    // office_name,
    // office_contact_number,
    // district,
    // website_url,
    // municipality,
    // providence,
    // pan_vat_certificate,
    // company_registration_certificate,
  }) => {
    const response = await axios.post(
      "https://thekkabazar.com/accounts/apis/usermanagement/create/user/",
      {
        username,
        fullname,
        password,
        email,
        password2,
        phone_number,
        company_name,
        // office_name,
        // office_contact_number,
        // district,
        // website_url,
        // municipality,
        // providence,
        // pan_vat_certificate,
        // company_registration_certificate,
      }
    );
    const data = response.data;
    console.log(data);
    return data;
  }
);

export const getDistrict = createAsyncThunk("data/getDistrict", async () => {
  const response = await axios.get(
    "https://thekkabazar.com/accounts/apis/usermanagement/create/user/"
  );
  const data = response.data;
  return data;
});

const authSlice = createSlice({
  name: "users",
  initialState: {
    access_token: Cookies.get("access_token") || "",
    role: "",
    status: "idle",
    error: null,
    isAuthenticated: false,
    username: "",
    districtData: [],
  },
  reducers: {
    logout: (state) => {
      // Reset state to initial values on logout
      state.access_token = "";
      state.role = "";
      state.status = "idle";
      state.error = null;
      state.isAuthenticated = false;
      toast.success("Logout successful");
      Cookies.remove("access_token");
    },
  },
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
        state.username = action.payload.username;
        state.isAuthenticated = true;
        toast.success("LogIn successful");
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
        toast.success("User Created successful");
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getDistrict.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDistrict.fulfilled, (state, action) => {
        state.districtData = action.payload;
      })
      .addCase(getDistrict.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
