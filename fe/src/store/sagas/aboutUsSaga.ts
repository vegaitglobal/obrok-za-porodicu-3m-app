import { call, put } from "redux-saga/effects";
import { AboutUsModel } from "../../models/AboutUsModel";
import aboutUsService from "../../services/aboutUsService";
import { updateAboutUs } from "../actions/aboutUsTypes";
import { setAboutUs } from "../slices/aboutUsSlice";

export function* handleGetAboutUs(): Generator<any, void, AboutUsModel> {
  try {
    const aboutUs: AboutUsModel = yield call(aboutUsService.getAboutUs);

    yield put(setAboutUs(aboutUs));
  } catch (error: any) {
    console.log(error);
  }
}

export function* handleUpdateAboutUs({
  payload,
}: ReturnType<typeof updateAboutUs>): Generator<any, void, AboutUsModel> {
  try {
    yield call(
      aboutUsService.updateAboutUs,
      payload
    );
    yield call(handleGetAboutUs);
  } catch (error: any) {
    console.log(error);
  }
}
