import { LoginUserModel } from "../../models/LoginUserModel";
import { AUTO_LOGIN, LOGIN, LOGOUT } from "./actionTypes";

export const login = (loginFormValues: LoginUserModel) => {
  return { type: LOGIN, payload: loginFormValues };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const autoLogin = () => {
  return { type: AUTO_LOGIN };
};
