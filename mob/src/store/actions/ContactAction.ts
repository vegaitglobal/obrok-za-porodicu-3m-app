import {Dispatch} from '@reduxjs/toolkit';
import {ResponseModel} from '../../models/ResponseModel';
import {setContacts} from '../reducers/ContactReducer';

import ContactService from '../../services/ContactService';
import {logIfOnline} from '../../utils/logging';

export const getContacts = () => (dispatch: Dispatch) => {
  ContactService.getContacts()
    .then((res: ResponseModel) => {
      dispatch(setContacts(res.data));
    })
    .catch((error: any) => {
      logIfOnline(error);
      console.error(error);
    });
};
