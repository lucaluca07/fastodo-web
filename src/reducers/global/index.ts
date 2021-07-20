import { createSlice } from "@reduxjs/toolkit";
import { IState } from "./type";

const initialState: IState = {
  loginPageVisible: false,
};

const fileSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    updateLoginPageVisible(state, action) {
      state.loginPageVisible = action.payload;
    },
  },
});

export const { updateLoginPageVisible } = fileSlice.actions;

export default fileSlice.reducer;
