import { GET_DONATIONS } from "./actionTypes";

export const getDonations = () => {
  return { type: GET_DONATIONS };
};

export const deleteDonation = (donationId: number) => {
  return { type: GET_DONATIONS, payload: { donationId } };
};
