import {Dispatch} from '@reduxjs/toolkit';
import {ResponseModel} from '../../models/ResponseModel';
import AboutUsService from '../../services/AboutUsService';
import {setAboutUsParagraphs} from '../reducers/AboutUsReducer';

export const getAboutUs = () => (dispatch: Dispatch) => {
  AboutUsService.getAboutUs()
    .then((res: ResponseModel) => {
      dispatch(setAboutUsParagraphs(res.data));
    })
    .catch((err: any) => {
      console.error(err);
    });
};
