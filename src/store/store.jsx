import { configureStore } from "@reduxjs/toolkit";

import cardSlice from "../reducers/cardSlice";
import userSlice from "../reducers/authSlice";
import dropdetails from "../reducers/formSlice";

const store = configureStore({
  reducer: {
    card: cardSlice,
    users: userSlice,
    dropdetails: dropdetails,
  },
});

export default store;
