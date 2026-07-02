import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./ServiceSlice";

export const store = configureStore({
  reducer: {
    service: serviceReducer,
  },
});