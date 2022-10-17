import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {BankAccountModel} from '../../models/BankAccountModel';

interface BankAccountState {
  bankAccount: BankAccountModel;
}

const initialState: BankAccountState = {
  bankAccount: {
    accountNumber: '',
    transactionModel: '',
    receiverAddress: '',
    receiverCity: '',
    receiverName: '',
    referenceNumber: '',
    phoneNumber: '',
  },
};

const bankAccountSlice = createSlice({
  initialState,
  name: 'bankAccountReducer',
  reducers: {
    setBankAccount(state, {payload}: PayloadAction<BankAccountModel>) {
      state.bankAccount = payload;
    },
  },
});

export const {setBankAccount} = bankAccountSlice.actions;

export default bankAccountSlice.reducer;
