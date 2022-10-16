import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AboutUsModel } from "../../models/AboutUsModel";
import { AboutUsSliceModel } from "../model/aboutUsSliceModel";

const initAboutUsSlice: AboutUsSliceModel = {
  aboutUs: {
    id: null,
    description: '',
    rawDescription: '',
  },
};

const aboutUsSlice = createSlice({
  name: "aboutUs",
  initialState: initAboutUsSlice,
  reducers: {
    setAboutUs(state, action: PayloadAction<AboutUsModel>) {
      state.aboutUs = action.payload;
    },
  },
});

export const { setAboutUs } = aboutUsSlice.actions;

export default aboutUsSlice.reducer;
