import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactModel } from "../../models/ContactModel";
import { DonationModel } from "../../models/DonationModel";
import { ContactSliceModel } from "../model/contactSliceModel";
import { DonationSliceModel } from "../model/donationSliceModel";
import { VolunteerActionSliceModel } from "../model/volunteerActionSliceModel";

const initDonationSlice: DonationSliceModel = {
  donations: [],
};

const donationSlice = createSlice({
  name: "donations",
  initialState: initDonationSlice,
  reducers: {
    setDonations(state, action: PayloadAction<DonationModel[]>) {
      state.donations = action.payload;
    },
  },
});

export const { setDonations } = donationSlice.actions;

export default donationSlice.reducer;
