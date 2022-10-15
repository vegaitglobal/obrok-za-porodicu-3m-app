import {createAsyncThunk, Dispatch} from '@reduxjs/toolkit';
import {AboutUsParagraphModel} from '../../models/AboutUsParagraphModel';
import {ResponseModel} from '../../models/ResponseModel';
import AboutUsService, {
  MockAboutUsService,
} from '../../services/AboutUsService';
import {setAboutUsParagraphs} from '../reducers/AboutUsReducer';

export const getAboutUs = createAsyncThunk(
  'aboutUs/getAboutUs',
  async (dispatch: Dispatch) => {
    const service: typeof AboutUsService = new MockAboutUsService();

    const response: ResponseModel = await service.getAboutUs();
    const paragraphs: AboutUsParagraphModel[] = response.data;

    dispatch(setAboutUsParagraphs(paragraphs));
  },
);
