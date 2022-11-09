import { toast } from "react-toastify";
import { AboutUsModel } from "../models/AboutUsModel";
import ApiService from "./apiService";

const ENDPOINTS = {
  ABOUT_US: "about-us"
};

export class AboutUsService extends ApiService {
  getAboutUs = async (
  ) => {
    const { data } = await this.apiClient.get(
      ENDPOINTS.ABOUT_US
    );

    return data;
  };
  

  updateAboutUs = async (payload: AboutUsModel) => {
    try {
      const { data} = await this.apiClient.put(ENDPOINTS.ABOUT_US, payload);
      toast.success("Uspešna izmena opisa.");
      return data;
    } catch (err) {
      toast.error("Greška prilikom čuvanja opisa.");
    }
  };
}

const aboutUsService = new AboutUsService();

export default aboutUsService;
