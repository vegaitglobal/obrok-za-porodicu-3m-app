import axios from 'axios';
import {ResponseModel} from '../models/ResponseModel';
import {BASE_URL} from '../constants/BaseUrl';
import crashlytics from '@react-native-firebase/crashlytics';

interface IContactService {
  getContacts(): Promise<ResponseModel | null>;
}

class ContactService implements IContactService {
  async getContacts(): Promise<ResponseModel> {
    try {
      const response = await axios.get(`${BASE_URL}/api/contacts`);

      return {
        code: 200,
        data: response.data,
      };
    } catch (error: any) {
      crashlytics().log(error.toString());
      return Promise.reject(error);
    }
  }
}

export default new ContactService();
