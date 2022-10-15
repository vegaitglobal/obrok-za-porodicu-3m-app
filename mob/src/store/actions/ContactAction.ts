import {Dispatch} from '@reduxjs/toolkit';
import {ResponseModel} from '../../models/ResponseModel';
import {setContacts} from '../reducers/ContactReducer';
import crashlytics from '@react-native-firebase/crashlytics';

import ContactService from '../../services/ContactService';

export const getContacts = () => (dispatch: Dispatch) => {
  ContactService.getContacts()
    .then((res: ResponseModel) => {
      dispatch(setContacts(res.data));
    })
    .catch((err: any) => {
      crashlytics().log(err);
      console.error(err);
    });
};
