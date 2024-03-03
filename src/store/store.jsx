import { configureStore } from "@reduxjs/toolkit";

import cardSlice from "../reducers/cardSlice";
import userSlice from "../reducers/authSlice";
import dropdetails from "../reducers/formSlice";
import noticeData from "../reducers/noticeSlice";
import privateWorkSlice from "../reducers/privateWorkSlice";
import resultSlice from "../reducers/resultSlice";
import bazarSlice from "../reducers/bazarSlice";
import priceSlice from "../reducers/priceListSlice";
import profileSlice from "../reducers/profileSlice";
import aboutusSlice from "../reducers/aboutusSlice";

const store = configureStore({
  reducer: {
    card: cardSlice,
    users: userSlice,
    dropdetails: dropdetails,
    notice: noticeData,
    privateWorks: privateWorkSlice,
    result: resultSlice,
    bazar: bazarSlice,
    price: priceSlice,
    profile: profileSlice,
    aboutus: aboutusSlice,
  },
});

export default store;
