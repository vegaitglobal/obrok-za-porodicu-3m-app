import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactModel } from "../../models/ContactModel";
import { AuthSliceModel } from "../model/authSliceModel";

const initAuthSliceModel: AuthSliceModel = {
  loggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initAuthSliceModel,
  reducers: {
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = authSlice.actions;

export default authSlice.reducer;
