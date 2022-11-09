import { toast } from "react-toastify";
import { SubscribersModel } from "../models/SubscribersModel";
import ApiService from "./apiService";

const ENDPOINTS = {
  SUBSCRIBERS: "newsletter-subscriptions",
};

export class SubscribersService extends ApiService {
  getSubscribers = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.SUBSCRIBERS);

    return data;
  };

  deleteSubscribers = async (id: number) => {
    try {
      const { data } = await this.apiClient.delete(ENDPOINTS.SUBSCRIBERS + "/" + id);

      toast.success("Uspešno brisanje pretplatnika.");

      return data;
    } catch (err) {
      toast.error("Greška prilikom brisanja pretplatnika.");
    }
  };

  addSubscribers = async (payload: SubscribersModel) => {
    try {
      const { data } = await this.apiClient.post(ENDPOINTS.SUBSCRIBERS, payload);

      toast.success("Uspešno dodavanje pretplatnika.");
      
      return data;
    } catch (err) {
      toast.error("Greška prilikom dodavanja pretplatnika.");
    }
  };

  updateSubscribers = async (payload: SubscribersModel) => {
    const { data } = await this.apiClient.put(ENDPOINTS.SUBSCRIBERS, payload);

    return data;
  };
}

const subscribersService = new SubscribersService();

export default subscribersService;
