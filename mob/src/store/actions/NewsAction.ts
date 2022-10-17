import {Dispatch} from 'redux';

import {NewsModel} from '../../models/News/NewsModel';
import {NewsPageModel} from '../../models/News/NewsPageModel';
import {ResponseModel} from '../../models/ResponseModel';
import NewsService from '../../services/NewsService';
import {setCurrentNews, setNews} from '../reducers/NewsReducer';

export const getNews = (page: number) => (dispatch: Dispatch) => {
  NewsService.getNews(page).then((res: ResponseModel) => {
    if (res) {
      dispatch(setNews(res.data as NewsPageModel));
    }
  });
};

export const getNewsById = (id: number) => (dispatch: Dispatch) => {
  NewsService.getNewsById(id).then((res: ResponseModel) => {
    if (res) {
      dispatch(setCurrentNews(res.data as NewsModel));
    }
  });
};
