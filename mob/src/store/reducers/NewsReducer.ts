import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NewsDTO} from '../../models/News/NewsDTO';
import {NewsPageModel} from '../../models/News/NewsPageModel';

interface NewsState {
  news: Array<NewsDTO>;
  currentPage: number;
  totalData: number;
  totalPages: number;
}

const initialState: NewsState = {
  news: [],
  currentPage: 0,
  totalData: 0,
  totalPages: 0,
};

const newsSlice = createSlice({
  initialState,
  name: 'newsActions',
  reducers: {
    setNews(state, {payload}: PayloadAction<NewsPageModel>) {
      state.news = payload.content;
      state.currentPage = payload.pagination.currentPage;
      state.totalData = payload.pagination.totalResults;
      state.totalPages = payload.pagination.totalPages;
    },
  },
});

export const {setNews} = newsSlice.actions;

export default newsSlice.reducer;
