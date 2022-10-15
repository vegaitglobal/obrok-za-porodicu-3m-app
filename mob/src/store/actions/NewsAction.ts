import {Dispatch} from 'redux';
import {NewsPageModel} from '../../models/News/NewsPageModel';
import {ResponseModel} from '../../models/ResponseModel';
import NewsService from '../../services/NewsService';
import {setNews} from '../reducers/NewsReducer';

export const getNews = (page: number) => (dispatch: Dispatch) => {
  NewsService.getNews(page).then((res: ResponseModel) => {
    if (res) {
      dispatch(setNews(res.data as NewsPageModel));
    }
  });
};
