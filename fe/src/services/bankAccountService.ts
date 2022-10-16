import { BankAccountModel } from "../models/BankAccountModel";
import ApiService from "./apiService";

const ENDPOINTS = {
  BANK_ACCOUNT: "bank-account"
};

export class BankAccountService extends ApiService {
  getBankAccount = async (
  ) => {
    const { data } = await this.apiClient.get(
      ENDPOINTS.BANK_ACCOUNT
    );

    return data;
  };

  updateBankAccount = async (payload: BankAccountModel) => {
    const { data } = await this.apiClient.put(ENDPOINTS.BANK_ACCOUNT, payload);

    return data;
  };
}

const bankAccountService = new BankAccountService();

export default bankAccountService;
