import axios from 'axios';
import {BASE_URL} from '../constants/BaseUrl';
import {BankAccountModel} from '../models/BankAccountModel';
import {logIfOnline} from '../utils/logging';

interface IBankAccountService {
  getBankAccount(): Promise<BankAccountModel>;
}

class BankAccountService implements IBankAccountService {
  async getBankAccount(): Promise<BankAccountModel> {
    try {
      const response = await axios.get(`${BASE_URL}/api/bank-account`);
      return response.data;
    } catch (error) {
      console.log(error);
      logIfOnline(error);
      return Promise.reject(error);
    }
  }
}

export default new BankAccountService();
