import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VolunteerActionModel } from "../../models/VolunteerActionModel";
import { VolunteerActionSliceModel } from "../model/volunteerActionSliceModel";

const initVolunteerActionSlice: VolunteerActionSliceModel = {
  volunteerActions: [],
};

const volunteerActionSlice = createSlice({
  name: "volunteerAction",
  initialState: initVolunteerActionSlice,
  reducers: {
    setVolunteerActions(state, action: PayloadAction<VolunteerActionModel[]>) {
      state.volunteerActions = action.payload;
    },
  },
});

export const { setVolunteerActions } = volunteerActionSlice.actions;

export default volunteerActionSlice.reducer;
