import { DELETE_DONATION, GET_DONATIONS } from "./actionTypes";

export const getDonations = () => {
  return { type: GET_DONATIONS };
};

export const deleteDonation = (donationId: number) => {
  return { type: DELETE_DONATION, payload: { donationId } };
};
