import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userLogin(state, action) {},
    userRegister(state, action) {},
  },
});

export default authSlice.reducer;
