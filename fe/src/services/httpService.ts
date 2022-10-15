import axios, { AxiosInstance } from "axios";

export class HttpService {
  client: AxiosInstance;

  constructor(options = {}) {
    this.client = axios.create(options);
    this.client.interceptors.request.use((config: any) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    });
  }
}

const options = {
  baseURL: process.env.REACT_APP_API_URL,
};

const httpService = new HttpService(options);

export default httpService;
