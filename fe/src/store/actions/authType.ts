import { LoginUserModel } from "../../models/LoginUserModel";
import { LOGIN, LOGOUT } from "./actionTypes";

export const login = (loginFormValues: LoginUserModel) => {
  return { type: LOGIN, payload: loginFormValues };
};

export const logout = () => {
  return { type: LOGOUT };
};
