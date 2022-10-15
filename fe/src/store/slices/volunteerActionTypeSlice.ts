import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VolunteerActionTypeModel } from "../../models/VolunteerActionTypeModel";
import { VolunteerActionTypeSliceModel } from "../model/volunteerActionTypeSliceModel";

const initVolunteerActionSlice: VolunteerActionTypeSliceModel = {
  volunteerActionTypes: [],
};

const volunteerActionTypeSlice = createSlice({
  name: "volunteerActionType",
  initialState: initVolunteerActionSlice,
  reducers: {
    setVolunteerActionTypes(
      state,
      action: PayloadAction<VolunteerActionTypeModel[]>
    ) {
      state.volunteerActionTypes = action.payload;
    },
  },
});

export const { setVolunteerActionTypes } = volunteerActionTypeSlice.actions;

export default volunteerActionTypeSlice.reducer;
