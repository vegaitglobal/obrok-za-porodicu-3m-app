import { toast } from "react-toastify";
import { LoginUserModel } from "../models/LoginUserModel";
import ApiService from "./apiService";

const ENDPOINTS = {
  AUTHENTICATE: "user/authenticate",
};

export class AuthService extends ApiService {
  logIn = async (loginFormValues: LoginUserModel) => {
    try {
      const { data } = await this.apiClient.post(ENDPOINTS.AUTHENTICATE, loginFormValues);
      
      return data;
    } catch (err) {
      toast.error("Greška prilikom logovanja");
    }
  };
}

const authService = new AuthService();

export default authService;
