import { LoginUserModel } from "../models/LoginUserModel";
import ApiService from "./apiService";

const ENDPOINTS = {
  AUTHENTICATE: "user/authenticate",
};

export class AuthService extends ApiService {
  logIn = async (loginFormValues: LoginUserModel) => {
    const { data } = await this.apiClient.post(ENDPOINTS.AUTHENTICATE, loginFormValues);

    return data;
  };
}

const authService = new AuthService();

export default authService;
