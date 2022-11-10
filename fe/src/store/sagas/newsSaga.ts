import { call, put } from "redux-saga/effects";
import { NewsPageModel } from "../../models/NewsPageModel";
import newsService from "../../services/newsService";
import { addNews, deleteNews, getNews, setPaginationNews, updateNews } from "../actions/newsTypes";
import { setNews } from "../slices/newsSlice";
import {
    setPagination,
} from "../slices/newsSlice";

const DEFAULT_PAGE_NUMBER: number = 1;

export function* handleGetNews({
    payload,
}: ReturnType<typeof getNews>): Generator<
    any,
    void,
    NewsPageModel
> {
    try {
        const newsPage: NewsPageModel = yield call(
            newsService.getNewsPagination, payload.page ?? DEFAULT_PAGE_NUMBER
        );
        yield put(setNews(newsPage.content));
        yield put(setPaginationNews(newsPage.pagination));
    } catch (error: any) { }
}

export function* handleSetPaginationNews({
    payload,
}: ReturnType<typeof setPaginationNews>): Generator<
    any,
    void,
    void
> {
    try {
        yield put(setPagination(payload));
    } catch (error: any) { }
}

export function* handleAddNews({
    payload,
}: ReturnType<typeof addNews>): Generator<any, void, void> {
    try {
        yield call(newsService.addNews, payload);
        yield put(getNews({}));
    } catch (error: any) {
        console.error(error);
    }
}

export function* handleUpdateNews({
    payload,
}: ReturnType<typeof updateNews>): Generator<any, void, void> {
    try {
        yield call(newsService.updateNews, payload);
        yield put(getNews({}));
    } catch (error: any) {
        console.error(error);
    }
}

export function* handleDeleteNews({
    payload,
}: ReturnType<typeof deleteNews>): Generator<any, void, void> {
    try {
        yield call(newsService.deleteNews, payload.newsId);

        yield put(getNews({}));
    } catch (error: any) {
        console.error(error);
    }
}