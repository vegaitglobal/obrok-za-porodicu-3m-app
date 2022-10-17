import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {NewsDTO} from '../../models/News/NewsDTO';
import {NewsModel} from '../../models/News/NewsModel';
import {NewsPageModel} from '../../models/News/NewsPageModel';

interface NewsState {
  news: Array<NewsDTO>;
  currentPage: number;
  totalData: number;
  totalPages: number;
  currentNews: NewsModel | undefined;
}

const initialState: NewsState = {
  news: [],
  currentPage: 0,
  totalData: 0,
  totalPages: 0,
  currentNews: undefined,
};

const newsSlice = createSlice({
  initialState,
  name: 'newsActions',
  reducers: {
    setNews(state, {payload}: PayloadAction<NewsPageModel>) {
      if (payload.pagination.currentPage === 1) {
        state.news = payload.content;
      } else {
        state.news = [...state.news, ...payload.content];
      }
      state.currentPage = payload.pagination.currentPage;
      state.totalData = payload.pagination.totalResults;
      state.totalPages = payload.pagination.totalPages;
    },
    setCurrentNews(state, {payload}: PayloadAction<NewsModel>) {
      state.currentNews = payload;
    },
    resetCurrentNews(state) {
      state.currentNews = undefined;
    },
  },
});

export const {setNews, setCurrentNews, resetCurrentNews} = newsSlice.actions;

export default newsSlice.reducer;
