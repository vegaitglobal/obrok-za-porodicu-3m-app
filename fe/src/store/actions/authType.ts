import { LoginUserModel } from "../../models/LoginUserModel";
import { LOGIN } from "./actionTypes";

export const login = (loginFormValues: LoginUserModel) => {
  return { type: LOGIN, payload: loginFormValues };
};
