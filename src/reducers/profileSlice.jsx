import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getProfile = createAsyncThunk(
  "data/getProfile",
  async ({ access_token }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    const response = await axios.get(
      `https://product.thekkabazar.com/accounts/apis/usermanagement/view/profile/`,
      config
    );
    const data = response.data;
    return data;
  }
);

export const changePassword = createAsyncThunk(
  "data/changePassword",
  async ({ access_token, old_password, new_password, confirm_password }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    const response = await axios.post(
      `https://product.thekkabazar.com/accounts/apis/usermanagement/changepassword/`,
      { old_password, new_password, confirm_password },
      config
    );
    const data = response.data;
    return data;
  }
);

export const updateProfile = createAsyncThunk(
  "data/updateProfile",
  async ({
    access_token,
    fullname,
    company_name,
    office_name,
    office_contact_number,
    website_url,
    district,
    municipality,
  }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    const response = await axios.put(
      `https://product.thekkabazar.com/accounts/apis/usermanagement/update/profile/`,
      {
        fullname,
        company_name,
        office_name,
        office_contact_number,
        website_url,
        district,
        municipality,
      },
      config
    );
    const data = response.data;
    return data;
  }
);

export const getUserInterest = createAsyncThunk(
  "data/getUserInterest",
  async ({ access_token }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    const response = await axios.get(
      `https://product.thekkabazar.com/accounts/apis/usermanagement/intrest/`,
      config
    );
    return response.data;
  }
);

const profileSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    message: "",
    userInterest: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(changePassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload.message;
        toast.success("Password Changed successful");
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        toast.success("Profile Updated successful");
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(state.error);
      })
      .addCase(getUserInterest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserInterest.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userInterest = action.payload;
      })
      .addCase(getUserInterest.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;
