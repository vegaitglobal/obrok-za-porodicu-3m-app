import { call, put } from "redux-saga/effects";
import { DonationModel } from "../../models/DonationModel";
import donationService from "../../services/donationService";
import { deleteDonation } from "../actions/donationType";
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
