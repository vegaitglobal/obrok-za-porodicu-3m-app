import { call, put } from "redux-saga/effects";
import { VolunteerActionModel } from "../../models/VolunteerActionModel";
import { VolunteerActionPageModel } from "../../models/VolunteerActionPageModel";
import volunteerActionsService from "../../services/volunteerActionsService";
import { setVolunteerActions } from "../slices/volunteerActionSlice";

export function* handleGetVolunteerActions(): Generator<
  any,
  void,
  VolunteerActionPageModel
> {
  try {
    const volunteerActionsPage: VolunteerActionPageModel = yield call(
      volunteerActionsService.getVolunteerActionsPagination
    );
    yield put(setVolunteerActions(volunteerActionsPage.content));
  } catch (error: any) {}
}
