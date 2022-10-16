import { BankAccountModel } from "../models/BankAccountModel";
import ApiService from "./apiService";

const ENDPOINTS = {
  VOLUNTEER_ACTIONS: "bank-account"
};

export class BankAccountService extends ApiService {
  getBankAccount = async (
  ) => {
    const { data } = await this.apiClient.get(
      ENDPOINTS.VOLUNTEER_ACTIONS
    );

    return data;
  };

  updateBankAccount = async (payload: BankAccountModel) => {
    const { data } = await this.apiClient.put(ENDPOINTS.VOLUNTEER_ACTIONS, payload);

    return data;
  };
}

const bankAccountService = new BankAccountService();

export default bankAccountService;
