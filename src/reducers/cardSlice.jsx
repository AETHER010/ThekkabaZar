import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: [],
  reducers: {
    createCard(state, action) {},
  },
});

export default cardSlice.reducer;
