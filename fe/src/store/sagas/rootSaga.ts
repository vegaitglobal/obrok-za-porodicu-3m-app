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
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_DONATION,
  GET_VOLUNTEER_ACTIONS,
  GET_VOLUNTEER_ACTIONS_STATUSES,
  ADD_ACTION_STATUS,
} from "../actions/actionTypes";
import { handleLogin, handleLogout } from "./authSaga";
import { handleGetDonations, handleDeleteDonation } from "./donationSaga";
import {
  handleAddContact,
  handleDeleteContact,
  handleGetContacts,
  handleUpdateContact,
} from "./contactsSaga";
import {
  handleDeleteActionType,
  handleGetVolunteerActionTypes,
  handleAddVolunteerActionType,
  handleUpdateVolunteerActionType,
} from "./volunteerActionTypesSaga";
import {
  handleAddActionStatus,
  handleGetVolunteerActions,
  handleGetVolunteerActionStatuses,
} from "./volunteerActionSaga";

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, handleLogin),
    takeLatest(LOGOUT, handleLogout),
    takeLatest(GET_VOLUNTEER_ACTIONS, handleGetVolunteerActions),
    takeLatest(
      GET_VOLUNTEER_ACTIONS_STATUSES,
      handleGetVolunteerActionStatuses
    ),
    takeLatest(ADD_ACTION_STATUS, handleAddActionStatus),
    takeLatest(GET_VOLUNTEER_ACTION_TYPES, handleGetVolunteerActionTypes),
    takeLatest(DELETE_VOLUNTEER_ACTION_TYPE, handleDeleteActionType),
    takeLatest(GET_CONTACTS, handleGetContacts),
    takeLatest(DELETE_CONTACT, handleDeleteContact),
    takeLatest(ADD_VOLUNTEER_ACTION_TYPE, handleAddVolunteerActionType),
    takeLatest(UPDATE_VOLUNTEER_ACTION_TYPE, handleUpdateVolunteerActionType),
    takeLatest(GET_DONATIONS, handleGetDonations),
    takeLatest(DELETE_DONATION, handleDeleteDonation),
    takeLatest(ADD_CONTACT, handleAddContact),
    takeLatest(UPDATE_CONTACT, handleUpdateContact),
  ]);
}
