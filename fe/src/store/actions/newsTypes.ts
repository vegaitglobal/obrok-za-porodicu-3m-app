import { NewsModel } from "../../models/NewsModel";
import { NewsPaginationPayloadModel } from "../../models/NewsPaginationPayloadModel";
import { PaginationModel } from "../../models/PaginationModel";
import {
    GET_NEWS,
    ADD_NEWS,
    UPDATE_NEWS,
    SET_PAGINATION_NEWS,
    DELETE_NEWS,
} from "./actionTypes";

export const getNews = (payload: NewsPaginationPayloadModel) => {
    return { type: GET_NEWS, payload: payload };
};

export const addNews = (payload: NewsModel) => {
    return { type: ADD_NEWS, payload: payload };
};

export const updateNews = (payload: NewsModel) => {
    return { type: UPDATE_NEWS, payload: payload };
};

export const setPaginationNews = (payload: PaginationModel) => {
    return { type: SET_PAGINATION_NEWS, payload: payload };
};

export const deleteNews = (newsId: number) => {
    return { type: DELETE_NEWS, payload: { newsId } };
};

