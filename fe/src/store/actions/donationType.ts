import { DonationDTOModel } from "../../models/DonationModel";
import { ADD_DONATION, DELETE_DONATION, GET_DONATIONS, UPDATE_DONATION } from "./actionTypes";

export const getDonations = () => {
  return { type: GET_DONATIONS };
};

export const addDonation = (payload: DonationDTOModel) => {
  return { type: ADD_DONATION,  payload: payload };
};

export const updateDonation = (payload: DonationDTOModel) => {
  return { type: UPDATE_DONATION,  payload: payload };
};

export const deleteDonation = (donationId: number) => {
  return { type: DELETE_DONATION, payload: { donationId } };
};
