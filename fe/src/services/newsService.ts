import { toast } from "react-toastify";
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
    try {
      const { data } = await this.apiClient.post(ENDPOINTS.NEWS, payload);

      toast.success("Uspešno dodavanje novosti.");

      return data;
    } catch (err) {
      toast.error("Greška prilikom kreiranja novosti.");
    }
  };

  updateNews = async (payload: NewsModel) => {
    try {
      const { data } = await this.apiClient.put(
        ENDPOINTS.NEWS,
        payload
      );

      toast.success("Uspešno izmenjena novost.");

      return data;
    } catch (err) {
      toast.error("Greška prilikom izmene novosti.");
    }
  };

  deleteNews = async (id: number) => {
    try {
      const { data } = await this.apiClient.delete(
        ENDPOINTS.NEWS + "/" + id
      );

      toast.success("Uspešno brisanje novosti.");

      return data;
    } catch (err) {
      toast.error("Greška prilikom brisanja novosti.");
    }
  };
}

const newsService = new NewsService();

export default newsService;
