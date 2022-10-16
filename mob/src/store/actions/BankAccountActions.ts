import {Dispatch} from '@reduxjs/toolkit';

import {BankAccountModel} from '../../models/BankAccountModel';
import BankAccountService from '../../services/BankAccountService';
import {setBankAccount} from '../reducers/BankAccountReducer';

export const getBankAccount = () => (dispatch: Dispatch) => {
  BankAccountService.getBankAccount()
    .then((res: BankAccountModel) => {
      dispatch(setBankAccount(res));
    })
    .catch((err: any) => {
      console.error(err);
    });
};
