import axios from 'axios';
import {BASE_URL} from '../constants/BaseUrl';
import {DonationModel} from '../models/DonationModel';

interface IDonateService {
  donate(donation: DonationModel): Promise<any>;
}

class DonateService implements IDonateService {
  async donate(donation: DonationModel): Promise<any> {
    try {
      const response = await axios.post(`${BASE_URL}/api/donations`, donation);
      return response.data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
}

export default new DonateService();
