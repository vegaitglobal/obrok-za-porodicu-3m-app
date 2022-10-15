import axios from 'axios';
import {BASE_URL} from '../constants/BaseUrl';
import {ResponseModel} from '../models/ResponseModel';
import crashlytics from '@react-native-firebase/crashlytics';

interface IVolunteerActionService {
  getActions(page: number): Promise<ResponseModel>;
  getActionStatuses(): Promise<ResponseModel>;
}

class VolunteerActionService implements IVolunteerActionService {
  async getActions(page: number): Promise<ResponseModel> {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/volunteer-actions?pageNumber=${page}&pageSize=10`,
      );

      return {
        data: response.data,
        code: 200,
      };
    } catch (error: any) {
      crashlytics().log(error.toString());
      console.log(error);
      return Promise.reject(error);
    }
  }

  async getActionStatuses(): Promise<ResponseModel> {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/volunteer-action-statuses`,
      );

      return {
        data: response.data,
        code: 200,
      };
    } catch (error: any) {
      crashlytics().log(error.toString());
      console.log(error);
      return Promise.reject(error);
    }
  }
}

export default new VolunteerActionService();
