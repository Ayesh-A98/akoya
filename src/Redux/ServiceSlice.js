import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedService: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setService: (state, action) => {
      state.selectedService = action.payload;
    },

    clearService: (state) => {
      state.selectedService = null;
    },
  },
});

export const { setService, clearService } = serviceSlice.actions;

export default serviceSlice.reducer;