import { createSlice } from "@reduxjs/toolkit";
import { VolunteerActionSliceModel } from "../model/volunteerActionSliceModel";

const initVolunteerActionSlice: VolunteerActionSliceModel = {
  volunteerActions: [],
};

const volunteerActionSlice = createSlice({
  name: "volunteerAction",
  initialState: initVolunteerActionSlice,
  reducers: {},
});

export default volunteerActionSlice.reducer;
