import axios from 'axios';
import {BASE_URL} from '../constants/BaseUrl';
import {ResponseModel} from '../models/ResponseModel';

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
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  async subscribeToNewsLetters(email: string): Promise<ResponseModel> {
    // try {
    // const response = await axios.get(`${BASE_URL}/api/about-us`);
    return {
      data: 'response.data',
      code: 200,
    };
    // } catch (error) {
    //   console.log(error);
    //   return Promise.reject(error);
    // }
  }
}

export default new AboutUsService();
