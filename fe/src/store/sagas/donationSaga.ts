import { call, put } from "redux-saga/effects";
import { DonationDTOModel, DonationModel } from "../../models/DonationModel";
import donationService from "../../services/donationService";
import { addDonation, deleteDonation, updateDonation } from "../actions/donationType";
import { setDonations } from "../slices/donationSlice";

export function* handleGetDonations(): Generator<any, void, DonationModel[]> {
  try {
    const donations: DonationModel[] = yield call(donationService.getDonations);

    yield put(setDonations(donations));
  } catch (error: any) {
    console.log(error);
  }
}

export function* handleDeleteDonation({
  payload,
}: ReturnType<typeof deleteDonation>): Generator<any, void, void> {
  try {
    yield call(donationService.deleteDonation, payload.donationId);

    yield call(handleGetDonations);
  } catch (error: any) {
    console.log(error);
  }
}

export function* handleAddDonation({
  payload,
}: ReturnType<typeof addDonation>): Generator<any, void, DonationDTOModel> {
  try {
    yield call(
      donationService.addDonation,
      payload
    );
    yield call(handleGetDonations);
  } catch (error: any) {
    console.log(error);
  }
}

export function* handleUpdateDonation({
  payload,
}: ReturnType<typeof updateDonation>): Generator<any, void, DonationDTOModel> {
  try {
    yield call(
      donationService.updateDonation,
      payload
    );
    yield call(handleGetDonations);
  } catch (error: any) {
    console.log(error);
  }
}