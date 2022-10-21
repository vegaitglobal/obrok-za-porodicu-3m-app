import { call, put } from "redux-saga/effects";
import { AccessTokenModel } from "../../models/AccessTokenModel";
import authService from "../../services/authService";
import { login } from "../actions/authType";
import { setLoggedIn } from "../slices/authSlice";
import jwt from "jwt-decode";
import { push } from "redux-first-history";

export function* handleLogin({
  payload,
}: ReturnType<typeof login>): Generator<any, void, AccessTokenModel> {
  try {
    const token: AccessTokenModel = yield call(authService.logIn, payload);
    localStorage.setItem("accessToken", token.jwtToken);

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

export function* handleAutoLogin(): Generator<any, any, string> {
  const token: string = localStorage.getItem("accessToken")!;
  if (token) {
    const decodedAuthToken: any = jwt(token);
    const dateNowSeconds = Math.round(new Date().getTime() / 1000);
    if (decodedAuthToken.exp - dateNowSeconds < 0) {
      yield call(handleLogout);
      yield put(push('/login'));
    } else {
      yield put(setLoggedIn(true));
    }
  } else {
    yield put(push('/login'));
  }
}