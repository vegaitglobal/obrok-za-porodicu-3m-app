import { DonationDTOModel } from "../models/DonationModel";
import ApiService from "./apiService";

const ENDPOINTS = {
  DONATIONS: "donations",
};

export class DonationService extends ApiService {
  getDonations = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.DONATIONS);

    return data;
  };

  deleteDonation = async (id: number) => {
    const { data } = await this.apiClient.delete(
      ENDPOINTS.DONATIONS + "/" + id
    );

    return data;
  };

  addDonation = async (payload: DonationDTOModel) => {
    const { data } = await this.apiClient.post(ENDPOINTS.DONATIONS, payload);

    return data;
  };

  updateDonation = async (payload: DonationDTOModel) => {
    const { data } = await this.apiClient.put(ENDPOINTS.DONATIONS, payload);

    return data;
  };
}

const donationService = new DonationService();

export default donationService;
