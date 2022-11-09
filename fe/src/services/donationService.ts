import { toast } from "react-toastify";
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
    try {
      const { data } = await this.apiClient.delete(ENDPOINTS.DONATIONS + "/" + id);

      toast.success("Uspešno obrisana donacija.");

      return data;
    } catch (err) {
      toast.error("Greška prilikom brisanja donacije.");
    }
  };

  addDonation = async (payload: DonationDTOModel) => {
    try {
      const { data } = await this.apiClient.post(ENDPOINTS.DONATIONS, payload);

      toast.success("Uspešno kreirana donacija.");

      return data;
    } catch (err) {
      toast.error("Greška prilikom dodavanja donacije.");
    }
  };

  updateDonation = async (payload: DonationDTOModel) => {
    try {
      const { data } = await this.apiClient.put(ENDPOINTS.DONATIONS, payload);

      toast.success("Uspešno izmenjana donacija.");
      
      return data;
    } catch (err) {
      toast.error("Greška prilikom izmene donacije.");
    }
  };
}

const donationService = new DonationService();

export default donationService;
