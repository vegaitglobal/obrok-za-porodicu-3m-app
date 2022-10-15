import {ResponseModel} from '../models/ResponseModel';
import crashlytics from '@react-native-firebase/crashlytics';

interface IContactService {
  getContacts(): Promise<ResponseModel | null>;
}

class ContactService implements IContactService {
  async getContacts(): Promise<ResponseModel> {
    try {
      throw new Error('Method not implemented.');
      // TODO: Remove or implement this method
      // return Promise.resolve();
    } catch (error: any) {
      crashlytics().log(error.toString());
      return Promise.reject(error);
    }
  }
}

export default new ContactService();
