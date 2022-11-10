import {Dispatch} from 'redux';

import {NewsModel} from '../../models/News/NewsModel';
import {NewsPageModel} from '../../models/News/NewsPageModel';
import {ResponseModel} from '../../models/ResponseModel';
import NewsService from '../../services/NewsService';
import {setCurrentNews, setNews} from '../reducers/NewsReducer';
import Toast from 'react-native-toast-message';
import i18n from '../../translations/i18n';

export const getNews = (page: number) => (dispatch: Dispatch) => {
  NewsService.getNews(page)
    .then((res: ResponseModel) => {
      if (res) {
        dispatch(setNews(res.data as NewsPageModel));
      }
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

export const getNewsById = (id: number) => (dispatch: Dispatch) => {
  NewsService.getNewsById(id)
    .then((res: ResponseModel) => {
      if (res) {
        dispatch(setCurrentNews(res.data as NewsModel));
      }
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
