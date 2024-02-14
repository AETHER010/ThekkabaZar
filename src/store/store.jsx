import { configureStore } from "@reduxjs/toolkit";

import cardSlice from "../reducers/cardSlice";
import userSlice from "../reducers/authSlice";
import dropdetails from "../reducers/formSlice";
import noticeData from "../reducers/noticeSlice";

const store = configureStore({
  reducer: {
    card: cardSlice,
    users: userSlice,
    dropdetails: dropdetails,
    notice: noticeData,
  },
});

export default store;
