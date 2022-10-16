import { call, put } from "redux-saga/effects";
import { VolunteerActionModel } from "../../models/VolunteerActionModel";
import volunteerActionsService from "../../services/volunteerActionsService";
import { setVolunteerActions } from "../slices/volunteerActionSlice";

export function* handleGetActions(): Generator<
  any,
  void,
  VolunteerActionModel[]
> {
  try {
    const volunteerActions: VolunteerActionModel[] = yield call(
      volunteerActionsService.getVolunteerActionsPagination
    );
    yield put(setVolunteerActions(volunteerActions));
  } catch (error: any) {}
}
