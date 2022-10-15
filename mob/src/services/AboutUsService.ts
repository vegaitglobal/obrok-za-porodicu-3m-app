import axios from 'axios';
import {BASE_URL} from '../constants/BaseUrl';
import {ResponseModel} from '../models/ResponseModel';

interface IAboutUsService {
  getAboutUs(): Promise<ResponseModel | null>;
}

class AboutUsService implements IAboutUsService {
  async getAboutUs(): Promise<ResponseModel> {
    console.log(`${BASE_URL}/api/about-us`);

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
}

export class MockAboutUsService implements IAboutUsService {
  async getAboutUs(): Promise<ResponseModel> {
    try {
      return Promise.resolve({
        code: 200,
        data: {
          id: 1,
          rawDescription: '',
          description:
            '<h1>About us</h1></br><p>We are organisation meal for families 3M. THIS IS MOCK API AND IS NOT REAL API</p>',
        },
      });
    } catch (error: any) {
      return Promise.reject(error);
    }
  }
}

export default new AboutUsService();
