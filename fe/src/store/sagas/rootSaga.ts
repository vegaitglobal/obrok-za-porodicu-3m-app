import { all, takeLatest } from "redux-saga/effects";
import {
  DELETE_CONTACT,
  DELETE_VOLUNTEER_ACTION_TYPE,
  ADD_VOLUNTEER_ACTION_TYPE,
  GET_CONTACTS,
  GET_DONATIONS,
  GET_VOLUNTEER_ACTION_TYPES,
  LOGIN,
  LOGOUT,
  UPDATE_VOLUNTEER_ACTION_TYPE,
} from "../actions/actionTypes";
import { handleLogin, handleLogout } from "./authSaga";
import { handleDeleteContact, handleGetContacts } from "./contactsSaga";
import { handleGetDonations } from "./donationSaga";
import {
  handleDeleteActionType,
  handleGetVolunteerActionTypes,
  handleAddVolunteerActionType,
  handleUpdateVolunteerActionType
} from "./volunteerActionTypesSaga";

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, handleLogin),
    takeLatest(LOGOUT, handleLogout),
    takeLatest(GET_VOLUNTEER_ACTION_TYPES, handleGetVolunteerActionTypes),
    takeLatest(DELETE_VOLUNTEER_ACTION_TYPE, handleDeleteActionType),
    takeLatest(GET_CONTACTS, handleGetContacts),
    takeLatest(DELETE_CONTACT, handleDeleteContact),
    takeLatest(ADD_VOLUNTEER_ACTION_TYPE, handleAddVolunteerActionType),
    takeLatest(UPDATE_VOLUNTEER_ACTION_TYPE, handleUpdateVolunteerActionType),
    takeLatest(GET_DONATIONS, handleGetDonations),
  ]);
}
