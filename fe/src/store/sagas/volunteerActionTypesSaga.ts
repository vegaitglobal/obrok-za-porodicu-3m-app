import { call, put } from "redux-saga/effects";
import { VolunteerActionTypeModel } from "../../models/VolunteerActionTypeModel";
import volunteerActionsService from "../../services/volunteerActionTypesService";
import { setVolunteerActionTypes } from "../slices/volunteerActionTypeSlice";

export function* handleGetVolunteerActionTypes(): Generator<
  any,
  void,
  VolunteerActionTypeModel[]
> {
  try {
    const volunteerActionTypes: VolunteerActionTypeModel[] = yield call(
      volunteerActionsService.getVolunteerActionTypes
    );

    yield put(setVolunteerActionTypes(volunteerActionTypes));
  } catch (error: any) {
    console.log(error);
  }
}
