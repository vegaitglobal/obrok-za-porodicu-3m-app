import { call, put } from "redux-saga/effects";
import { ContactModel } from "../../models/ContactModel";
import authService from "../../services/authService";
import contactsService from "../../services/contactService";
import { login } from "../actions/authType";
import { deleteContact } from "../actions/contactTypes";
import { setLoggedIn } from "../slices/authSlice";
import { setContacts } from "../slices/contactSlice";

export function* handleLogin({
  payload,
}: ReturnType<typeof login>): Generator<any, void, string> {
  try {
    const token: string = yield call(authService.logIn, payload);
    localStorage.setItem("accessToken", token);

    yield put(setLoggedIn(true));
  } catch (error: any) {
    console.log(error);
  }
}

export function* handleLogout(): Generator<any, void, string> {
  try {
    localStorage.removeItem("accessToken");

    yield put(setLoggedIn(false));
  } catch (error: any) {
    console.log(error);
  }
}
