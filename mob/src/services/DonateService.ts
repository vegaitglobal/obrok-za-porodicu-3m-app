import axios from 'axios';

import {BASE_URL} from '../constants/UrlConstants';
import {DonationModel} from '../models/DonationModel';
import {logIfOnline} from '../utils/logging';

interface IDonateService {
  donate(donation: DonationModel): Promise<any>;
}

class DonateService implements IDonateService {
  async donate(donation: DonationModel): Promise<any> {
    try {
      const response = await axios.post(`${BASE_URL}/api/donations`, donation);
      return response.data;
    } catch (error) {
      console.error(error);
      logIfOnline(error);
      return Promise.reject(error);
    }
  }
}

export default new DonateService();
