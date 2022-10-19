import { call, put } from "redux-saga/effects";
import { ActionsFilterModel } from "../../models/ActionsFilterModel";
import { VolunteerActionModel } from "../../models/VolunteerActionModel";
import { VolunteerActionPageModel } from "../../models/VolunteerActionPageModel";
import { VolunteerActionStatusModel } from "../../models/VolunteerActionStatusModel";
import volunteerActionsService from "../../services/volunteerActionsService";
import { addVolunteerAction, addActionTypeIdVolunteerActions, setSearchTermVolunteerActions, updateVolunteerAction, removeActionTypeIdVolunteerActions, getVolunteerActions, setPaginationVolunteerActions } from "../actions/volunteerActionsType";
import {
  setVolunteerActions,
  setVolunteerActionStatuses,
  setSearchTerm,
  addActionTypeId,
  removeActionTypeId,
  setAllVolunteerActions,
  setPagination,
} from "../slices/volunteerActionSlice";

const DEFAULT_PAGE_NUMBER: number = 1;
const DEFAULT_FILTER: ActionsFilterModel = {
  "actionTypeIds": [
  ],
  "searchTerm": ""
};

export function* handleGetVolunteerActions({
  payload,
}: ReturnType<typeof getVolunteerActions>): Generator<
  any,
  void,
  VolunteerActionPageModel
> {
  try {
    const volunteerActionsPage: VolunteerActionPageModel = yield call(
      volunteerActionsService.getVolunteerActionsPagination, payload.page ?? DEFAULT_PAGE_NUMBER, payload.actionsFilter ?? DEFAULT_FILTER
    );
    yield put(setVolunteerActions(volunteerActionsPage.content));
    yield put(setPaginationVolunteerActions(volunteerActionsPage.pagination));
  } catch (error: any) { }
}

export function* handleSetSearchTermVolunteerActions({
  payload,
}: ReturnType<typeof setSearchTermVolunteerActions>): Generator<
  any,
  void,
  void
> {
  try {
    yield put(setSearchTerm(payload));
  } catch (error: any) { }
}

export function* handleAddActionTypeIdVolunteerActions({
  payload,
}: ReturnType<typeof addActionTypeIdVolunteerActions>): Generator<
  any,
  void,
  void
> {
  try {
    yield put(addActionTypeId(payload));
  } catch (error: any) { }
}

export function* handleRemoveActionTypeIdVolunteerActions({
  payload,
}: ReturnType<typeof removeActionTypeIdVolunteerActions>): Generator<
  any,
  void,
  void
> {
  try {
    yield put(removeActionTypeId(payload));
  } catch (error: any) { }
}

export function* handleSetPaginationVolunteerActions({
  payload,
}: ReturnType<typeof setPaginationVolunteerActions>): Generator<
  any,
  void,
  void
> {
  try {
    yield put(setPagination(payload));
  } catch (error: any) { }
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

export function* handleAddAction({
  payload,
}: ReturnType<typeof addVolunteerAction>): Generator<any, void, void> {
  try {
    yield call(volunteerActionsService.addAction, payload);
    yield put(getVolunteerActions({}));
  } catch (error: any) {
    console.log(error);
  }
}

export function* handleUpdateAction({
  payload,
}: ReturnType<typeof updateVolunteerAction>): Generator<any, void, void> {
  try {
    yield call(volunteerActionsService.updateAction, payload);
    yield put(getVolunteerActions({}));
  } catch (error: any) {
    console.log(error);
  }
}

export function* handleGetAllVolunteerActions(): Generator<any, void, VolunteerActionModel[]> {
  try {
    const volunteerActions: VolunteerActionModel[] = yield call(volunteerActionsService.getAllVolunteerActions);

    yield put(setAllVolunteerActions(volunteerActions));
  } catch (error: any) {
    console.log(error);
  }
}
