import {Dispatch} from '@reduxjs/toolkit';

import {BankAccountModel} from '../../models/BankAccountModel';
import BankAccountService from '../../services/BankAccountService';
import {setBankAccount} from '../reducers/BankAccountReducer';
import Toast from 'react-native-toast-message';
import i18n from '../../translations/i18n';

export const getBankAccount = () => (dispatch: Dispatch) => {
  BankAccountService.getBankAccount()
    .then((res: BankAccountModel) => {
      dispatch(setBankAccount(res));
    })
    .catch((err: any) => {
      console.error(err);

      Toast.show({
        type: 'error',
        props: {
          title: i18n.t('general.error'),
          description: i18n.t('general.errorText'),
        },
      });
    });
};
