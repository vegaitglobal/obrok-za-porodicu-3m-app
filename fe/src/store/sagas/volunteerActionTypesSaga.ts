import { call, put } from "redux-saga/effects";
import { VolunteerActionTypeModel } from "../../models/VolunteerActionTypeModel";
import volunteerActionTypesService from "../../services/volunteerActionTypesService";
import { deleteActionType } from "../actions/volunteerActionTypeTypes";
import { setVolunteerActionTypes } from "../slices/volunteerActionTypeSlice";

export function* handleGetVolunteerActionTypes(): Generator<
  any,
  void,
  VolunteerActionTypeModel[]
> {
  try {
    const volunteerActionTypes: VolunteerActionTypeModel[] = yield call(
      volunteerActionTypesService.getVolunteerActionTypes
    );

    yield put(setVolunteerActionTypes(volunteerActionTypes));
  } catch (error: any) {
    console.log(error);
  }
}

export function* handleDeleteActionType({
  payload,
}: ReturnType<typeof deleteActionType>): Generator<any, void, void> {
  try {
    console.log(payload.actionTypeId);
    yield call(
      volunteerActionTypesService.deleteActionType,
      payload.actionTypeId
    );
    yield call(handleGetVolunteerActionTypes);
  } catch (error: any) {
    console.log(error);
  }
}
