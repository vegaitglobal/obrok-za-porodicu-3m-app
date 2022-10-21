import { NewsModel } from "../models/NewsModel";
import ApiService from "./apiService";

const ENDPOINTS = {
  NEWS: "news",
  PAGE: "?pageNumber=",
  PAGE_SIZE: "&pageSize=",
};

const DEFAULT_PAGE_NUMBER: number = 1;
const DEFAULT_PAGE_SIZE: number = 9;

export class NewsService extends ApiService {
  getNewsPagination = async (
    page: number = DEFAULT_PAGE_NUMBER,
    pageSize: number = DEFAULT_PAGE_SIZE,
  ) => {
    const { data } = await this.apiClient.get(
      ENDPOINTS.NEWS +
      ENDPOINTS.PAGE +
      page +
      ENDPOINTS.PAGE_SIZE +
      pageSize
    );
    return data;
  };

  addNews = async (payload: NewsModel) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.NEWS,
      payload
    );

    return data;
  };

  updateNews = async (payload: NewsModel) => {
    const { data } = await this.apiClient.put(
      ENDPOINTS.NEWS,
      payload
    );

    return data;
  };

  deleteNews = async (id: number) => {
    const { data } = await this.apiClient.delete(
      ENDPOINTS.NEWS + "/" + id
    );

    return data;
  };
}

const newsService = new NewsService();

export default newsService;
