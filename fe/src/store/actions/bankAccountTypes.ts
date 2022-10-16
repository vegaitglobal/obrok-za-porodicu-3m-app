import { BankAccountModel } from "../../models/BankAccountModel";
import { GET_BANK_ACCOUNT, UPDATE_BANK_ACCOUNT } from "./actionTypes";

export const getBankAccount = () => {
  return { type: GET_BANK_ACCOUNT };
};

export const updateBankAccount = (payload: BankAccountModel) => {
  return { type: UPDATE_BANK_ACCOUNT,  payload: payload };
};
