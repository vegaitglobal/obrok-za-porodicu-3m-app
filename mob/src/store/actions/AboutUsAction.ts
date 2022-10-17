import Toast from 'react-native-toast-message';
import {createAsyncThunk, Dispatch} from '@reduxjs/toolkit';

import {AboutUsResponseModel} from '../../models/AboutUsResponseModel';
import {ResponseModel} from '../../models/ResponseModel';
import AboutUsService from '../../services/AboutUsService';
import {setAboutUsText} from '../reducers/AboutUsReducer';

export const getAboutUs = createAsyncThunk(
  'aboutUs/getAboutUs',
  async (dispatch: Dispatch) => {
    const service: typeof AboutUsService = AboutUsService;

    const response: ResponseModel = await service.getAboutUs();
    const aboutResponse: AboutUsResponseModel = response.data;
    const html: string = aboutResponse.description;

    dispatch(setAboutUsText(html));
  },
);

export const subscribeToNewsLetters = (email: string) => () => {
  AboutUsService.subscribeToNewsLetters(email)
    .then(() => {
      Toast.show({
        type: 'success',
        props: {
          title: 'Uspešno ste prijavljeni na newsletter!',
        },
      });
    })
    .catch(() => {
      Toast.show({
        type: 'error',
        props: {
          title: 'Mejl adresa je vec regiregistrovana u sistemu!',
        },
      });
    });
};
