import axios from 'axios';
import {BASE_URL} from '../constants/BaseUrl';
import {ResponseModel} from '../models/ResponseModel';

interface INewsService {
  getNews(page: number): Promise<ResponseModel>;
  getNewsById(id: number): Promise<ResponseModel>;
}

class NewsService implements INewsService {
  async getNews(page: number): Promise<ResponseModel> {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/news?pageNumber=${page}&pageSize=10`,
      );
      return {
        data: response.data,
        code: 200,
      };
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  async getNewsById(id: number): Promise<ResponseModel> {
    try {
      const response = await axios.get(`${BASE_URL}/api/news/${id}`);

      return {
        data: response.data,
        code: 200,
      };
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
}

export default new NewsService();
