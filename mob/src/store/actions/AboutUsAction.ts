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
