import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../modules/Authentication/authSlice";


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
});