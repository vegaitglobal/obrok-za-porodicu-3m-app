import axios from 'axios';
import {BASE_URL} from '../constants/BaseUrl';
import {ResponseModel} from '../models/ResponseModel';
import {logIfOnline} from '../utils/logging';

interface INewsService {
  getNews(page: number): Promise<ResponseModel>;
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
      logIfOnline(error);
      return Promise.reject(error);
    }
  }
}

export default new NewsService();
