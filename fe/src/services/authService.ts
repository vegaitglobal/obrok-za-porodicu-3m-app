import ApiService from "./apiService";

const ENDPOINTS = {
  AUTHENTICATE: "authenticate",
};

export class AuthService extends ApiService {
  logIn = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.AUTHENTICATE);

    return data;
  };
}

const authService = new AuthService();

export default authService;
