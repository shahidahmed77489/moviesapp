import { createSlice } from "@reduxjs/toolkit";

const loginPageSlice = createSlice({
  name: "loginPage",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openLoginPage: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openLoginPage } = loginPageSlice.actions;

export default loginPageSlice.reducer;
