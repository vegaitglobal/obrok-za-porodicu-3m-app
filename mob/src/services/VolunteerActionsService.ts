import axios from 'axios';

import {BASE_URL} from '../constants/BaseUrl';
import {ResponseModel} from '../models/ResponseModel';
import {FilterVolunteerActionsType} from '../models/VolunteerAction/AppliedVolunteerAction';
import {logIfOnline} from '../utils/logging';

interface IVolunteerActionService {
  getActions(page: number): Promise<ResponseModel>;
  getActionStatuses(): Promise<ResponseModel>;
  getVolunteerActionTypes(): Promise<ResponseModel>;
  getVolunteerActionsByTagsAndSearchTerm(
    query: FilterVolunteerActionsType,
    page: number,
  ): Promise<ResponseModel>;
  getVolunteerAction(id: number): Promise<ResponseModel>;
}

class VolunteerActionService implements IVolunteerActionService {
  async getActions(page: number): Promise<ResponseModel> {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/volunteer-actions/search?pageNumber=${page}&pageSize=10`,
        {},
      );

      return {
        data: response.data,
        code: 200,
      };
    } catch (error) {
      console.error(error);
      logIfOnline(error);
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
      console.error(error);
      logIfOnline(error);
      return Promise.reject(error);
    }
  }

  async getVolunteerActionTypes(): Promise<ResponseModel> {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/volunteer-action-types`,
      );
      return {
        data: response.data,
        code: 200,
      };
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }

  async getVolunteerActionsByTagsAndSearchTerm(
    query: FilterVolunteerActionsType,
    page: number,
  ): Promise<ResponseModel> {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/volunteer-actions/search?pageSize=10&pageNumber=${page}`,
        query,
      );
      return {
        data: response.data,
        code: 200,
      };
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }

  async getVolunteerAction(id: number): Promise<ResponseModel> {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/volunteer-actions/${id}`,
      );

      return {
        data: response.data,
        code: 200,
      };
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }
}

export default new VolunteerActionService();
