import { all, takeLatest } from "redux-saga/effects";
import {
  DELETE_CONTACT,
  DELETE_VOLUNTEER_ACTION_TYPE,
  GET_CONTACTS,
  GET_VOLUNTEER_ACTION_TYPES,
  LOGIN,
  LOGOUT,
} from "../actions/actionTypes";
import { handleLogin, handleLogout } from "./authSaga";
import { handleDeleteContact, handleGetContacts } from "./contactsSaga";
import {
  handleDeleteActionType,
  handleGetVolunteerActionTypes,
} from "./volunteerActionTypesSaga";

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, handleLogin),
    takeLatest(LOGOUT, handleLogout),
    takeLatest(GET_VOLUNTEER_ACTION_TYPES, handleGetVolunteerActionTypes),
    takeLatest(DELETE_VOLUNTEER_ACTION_TYPE, handleDeleteActionType),
    takeLatest(GET_CONTACTS, handleGetContacts),
    takeLatest(DELETE_CONTACT, handleDeleteContact),
  ]);
}
