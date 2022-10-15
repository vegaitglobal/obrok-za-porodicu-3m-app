import axios from 'axios';
import {BASE_URL} from '../constants/BaseUrl';
import {ResponseModel} from '../models/ResponseModel';

interface IVolunteerActionService {
  getActions(page: number): Promise<ResponseModel>;
  getActionStatuses(): Promise<ResponseModel>;
}

class VolunteerActionService implements IVolunteerActionService {
  async getActions(
    page: number,
    pageSize: number = 10,
    searchQuery?: string,
    categoryIds?: number[],
  ): Promise<ResponseModel> {
    const searchFragment: string = searchQuery ? `&search=${searchQuery}` : '';
    const filterFragment: string =
      categoryIds && categoryIds?.length > 0
        ? `&filters=[${categoryIds?.map(e => e.toString).join(',')}]`
        : '';
    try {
      const response = await axios.get(
        `${BASE_URL}/api/volunteer-actions?pageNumber=${page}&pageSize=${pageSize}${searchFragment}${filterFragment}`,
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

  async getActionStatuses(): Promise<ResponseModel> {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/volunteer-action-statuses`,
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
}

export default new VolunteerActionService();
