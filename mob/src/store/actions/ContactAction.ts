import {Dispatch} from '@reduxjs/toolkit';

import {ResponseModel} from '../../models/ResponseModel';
import {setContacts} from '../reducers/ContactReducer';
import ContactService from '../../services/ContactService';
import Toast from 'react-native-toast-message';
import i18n from '../../translations/i18n';

export const getContacts = () => (dispatch: Dispatch) => {
  ContactService.getContacts()
    .then((res: ResponseModel) => {
      dispatch(setContacts(res.data));
    })
    .catch((err: any) => {
      console.log(err);

      Toast.show({
        type: 'error',
        props: {
          title: i18n.t('general.error'),
          description: i18n.t('general.errorText'),
        },
      });
    });
};
