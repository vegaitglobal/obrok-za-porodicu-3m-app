import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BankAccountModel } from "../../models/BankAccountModel";
import { BankAccountSliceModel } from "../model/bankAccountSliceModel";

const initBankAccountSlice: BankAccountSliceModel = {
  bankAccount: {
    id: null,
    receiverName: '',
    receiverCity: '',
    receiverAddress: '',
    accountNumber: '',
    transactionModel: null,
    referenceNumber: null,
    phoneNumber: null
  },
};

const bankAccountSlice = createSlice({
  name: "bankAccount",
  initialState: initBankAccountSlice,
  reducers: {
    setBankAccount(state, action: PayloadAction<BankAccountModel>) {
      state.bankAccount = action.payload;
    },
  },
});

export const { setBankAccount } = bankAccountSlice.actions;

export default bankAccountSlice.reducer;
