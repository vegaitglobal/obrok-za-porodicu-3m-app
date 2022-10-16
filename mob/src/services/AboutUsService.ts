import axios from 'axios';
import {BASE_URL} from '../constants/BaseUrl';
import {ResponseModel} from '../models/ResponseModel';
import {logIfOnline} from '../utils/logging';

interface IAboutUsService {
  getAboutUs(): Promise<ResponseModel | null>;
}

class AboutUsService implements IAboutUsService {
  async getAboutUs(): Promise<ResponseModel> {
    try {
      const response = await axios.get(`${BASE_URL}/api/about-us`);
      return {
        data: response.data,
        code: 200,
      };
    } catch (error: any) {
      logIfOnline(error);
      console.log(error);
      return Promise.reject(error);
    }
  }

  async subscribeToNewsLetters(email: string): Promise<ResponseModel> {
    try {
      await axios.post(`${BASE_URL}/api/newsletter-subscriptions`, {
        email: email,
      });
      return {
        data: true,
        code: 200,
      };
    } catch (error) {
      logIfOnline(error);
      console.log(error);
      return Promise.reject(error);
    }
  }
}

export default new AboutUsService();
