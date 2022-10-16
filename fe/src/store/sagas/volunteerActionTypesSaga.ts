import { call, put } from "redux-saga/effects";
import { VolunteerActionTypeModel } from "../../models/VolunteerActionTypeModel";
import volunteerActionTypesService from "../../services/volunteerActionTypesService";
import { deleteActionType, updateVolunteerActionType } from "../actions/volunteerActionTypeTypes";
import volunteerActionsService from "../../services/volunteerActionTypesService";
import { addVolunteerActionType } from "../actions/volunteerActionTypeTypes";
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
  } catch (error: any) {}
}

export function* handleDeleteActionType({
  payload,
}: ReturnType<typeof deleteActionType>): Generator<any, void, void> {
  try {
    yield call(
      volunteerActionTypesService.deleteActionType,
      payload.actionTypeId
    );
    yield call(handleGetVolunteerActionTypes);
  } catch (error: any) {}
}

export function* handleAddVolunteerActionType({
    payload,
  }: ReturnType<typeof addVolunteerActionType>): Generator<any, void, VolunteerActionTypeModel> {
    try {
      console.log("SAGA")
      console.log(payload);
      yield call(
        volunteerActionTypesService.addVolunteerActionType,
        payload
      );
      yield call(handleGetVolunteerActionTypes);
    } catch (error: any) {
      console.log(error);
    }
  }

export function* handleUpdateVolunteerActionType({
    payload,
  }: ReturnType<typeof updateVolunteerActionType>): Generator<any, void, VolunteerActionTypeModel> {
    try {
      console.log("SAGA")
      console.log(payload);
      yield call(
        volunteerActionTypesService.updateVolunteerActionType,
        payload
      );
      yield call(handleGetVolunteerActionTypes);
    } catch (error: any) {
      console.log(error);
    }
  }
