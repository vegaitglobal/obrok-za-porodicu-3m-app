import { call, put } from "redux-saga/effects";
import { VolunteerActionPageModel } from "../../models/VolunteerActionPageModel";
import { VolunteerActionStatusModel } from "../../models/VolunteerActionStatusModel";
import volunteerActionsService from "../../services/volunteerActionsService";
import { addVolunteerActionStatus } from "../actions/volunteerActionsType";
import {
  setVolunteerActions,
  setVolunteerActionStatuses,
} from "../slices/volunteerActionSlice";

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

export function* handleGetVolunteerActionStatuses(): Generator<
  any,
  void,
  Array<VolunteerActionStatusModel>
> {
  try {
    const volunteerActionStatuses: VolunteerActionStatusModel[] = yield call(
      volunteerActionsService.getActionStatuses
    );
    yield put(setVolunteerActionStatuses(volunteerActionStatuses));
  } catch (error: any) {
    console.log(error);
  }
}

export function* handleAddActionStatus({
  payload,
}: ReturnType<typeof addVolunteerActionStatus>): Generator<any, void, void> {
  try {
    yield call(volunteerActionsService.addActionStatus, payload);
    yield call(handleGetVolunteerActions);
  } catch (error: any) {
    console.log(error);
  }
}
