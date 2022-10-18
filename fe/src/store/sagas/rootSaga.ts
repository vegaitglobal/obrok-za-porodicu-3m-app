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
  GET_BANK_ACCOUNT,
  UPDATE_BANK_ACCOUNT,
  GET_ABOUT_US,
  UPDATE_ABOUT_US,
  ADD_DONATION,
  UPDATE_DONATION,
  ADD_VOLUNTEER_ACTION,
  UPDATE_VOLUNTEER_ACTION
} from "../actions/actionTypes";
import { handleLogin, handleLogout } from "./authSaga";
import { handleGetDonations, handleDeleteDonation, handleAddDonation, handleUpdateDonation } from "./donationSaga";
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
  handleAddAction,
  handleGetVolunteerActions,
  handleGetVolunteerActionStatuses,
  handleUpdateAction,
} from "./volunteerActionSaga";
import { handleGetBankAccount, handleUpdateBankAccount } from "./bankAccountSaga";
import { handleGetAboutUs, handleUpdateAboutUs } from "./aboutUsSaga";

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, handleLogin),
    takeLatest(LOGOUT, handleLogout),
    takeLatest(GET_VOLUNTEER_ACTIONS, handleGetVolunteerActions),
    takeLatest(
      GET_VOLUNTEER_ACTIONS_STATUSES,
      handleGetVolunteerActionStatuses
    ),
    takeLatest(ADD_VOLUNTEER_ACTION, handleAddAction),
    takeLatest(UPDATE_VOLUNTEER_ACTION, handleUpdateAction),
    takeLatest(GET_VOLUNTEER_ACTION_TYPES, handleGetVolunteerActionTypes),
    takeLatest(DELETE_VOLUNTEER_ACTION_TYPE, handleDeleteActionType),
    takeLatest(GET_CONTACTS, handleGetContacts),
    takeLatest(DELETE_CONTACT, handleDeleteContact),
    takeLatest(ADD_VOLUNTEER_ACTION_TYPE, handleAddVolunteerActionType),
    takeLatest(UPDATE_VOLUNTEER_ACTION_TYPE, handleUpdateVolunteerActionType),
    takeLatest(GET_DONATIONS, handleGetDonations),
    takeLatest(DELETE_DONATION, handleDeleteDonation),
    takeLatest(ADD_DONATION, handleAddDonation),
    takeLatest(UPDATE_DONATION, handleUpdateDonation),
    takeLatest(ADD_CONTACT, handleAddContact),
    takeLatest(UPDATE_CONTACT, handleUpdateContact),
    takeLatest(GET_BANK_ACCOUNT, handleGetBankAccount),
    takeLatest(UPDATE_BANK_ACCOUNT, handleUpdateBankAccount),
    takeLatest(GET_ABOUT_US, handleGetAboutUs),
    takeLatest(UPDATE_ABOUT_US, handleUpdateAboutUs),
  ]);
}
