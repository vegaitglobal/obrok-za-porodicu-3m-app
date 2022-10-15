import { all, takeLatest } from "redux-saga/effects";
import {
  GET_CONTACTS,
  GET_VOLUNTEER_ACTION_TYPES,
} from "../actions/actionTypes";
import { handleGetContacts } from "./contactsSaga";
import { handleGetVolunteerActionTypes } from "./volunteerActionTypesSaga";

export default function* rootSaga() {
  yield all([
    takeLatest(GET_VOLUNTEER_ACTION_TYPES, handleGetVolunteerActionTypes),
    takeLatest(GET_CONTACTS, handleGetContacts),
  ]);
}
