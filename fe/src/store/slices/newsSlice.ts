import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaginationModel } from "../../models/PaginationModel";
import { NewsModel } from "../../models/NewsModel";
import { NewsSliceModel } from "../model/newsSliceModel";

const initNewsSlice: NewsSliceModel = {
    news: [],
    pagination: { currentPage: 1, pageSize: 0, totalPages: 1, totalResults: 0 }
};

const newsSlice = createSlice({
    name: "news",
    initialState: initNewsSlice,
    reducers: {
        setNews(state, action: PayloadAction<NewsModel[]>) {
            state.news = action.payload;
        },
        setPagination(state, action: PayloadAction<PaginationModel>) {
            state.pagination = action.payload;
        },
    },
});

export const { setNews, setPagination } =
    newsSlice.actions;

export default newsSlice.reducer;
