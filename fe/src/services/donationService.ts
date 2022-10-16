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
    console.log(id)
    const { data } = await this.apiClient.delete(
      ENDPOINTS.DONATIONS + "/" + id
    );

    return data;
  };
}

const donationService = new DonationService();

export default donationService;
