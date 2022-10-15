import { createSlice } from "@reduxjs/toolkit";
import { VolunteerActionSliceModel } from "../model/volunteerActionSliceModel";

const initVolunteerActionSlice: VolunteerActionSliceModel = {
  volunteerActions: [],
};

const volunteerActionTypeSlice = createSlice({
  name: "volunteerActionType",
  initialState: initVolunteerActionSlice,
  reducers: {},
});

export default volunteerActionTypeSlice.reducer;
