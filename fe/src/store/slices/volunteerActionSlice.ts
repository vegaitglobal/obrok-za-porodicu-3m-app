import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VolunteerActionModel } from "../../models/VolunteerActionModel";
import { VolunteerActionStatusModel } from "../../models/VolunteerActionStatusModel";
import { VolunteerActionSliceModel } from "../model/volunteerActionSliceModel";

const initVolunteerActionSlice: VolunteerActionSliceModel = {
  volunteerActions: [],
  volunteerActionStatuses: [],
};

const volunteerActionSlice = createSlice({
  name: "volunteerAction",
  initialState: initVolunteerActionSlice,
  reducers: {
    setVolunteerActions(state, action: PayloadAction<VolunteerActionModel[]>) {
      state.volunteerActions = action.payload;
    },
    setVolunteerActionStatuses(
      state,
      action: PayloadAction<VolunteerActionStatusModel[]>
    ) {
      state.volunteerActionStatuses = action.payload;
    },
  },
});

export const { setVolunteerActions, setVolunteerActionStatuses } =
  volunteerActionSlice.actions;

export default volunteerActionSlice.reducer;
