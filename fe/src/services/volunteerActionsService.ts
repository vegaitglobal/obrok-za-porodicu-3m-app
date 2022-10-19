import { VolunteerActionDTOModel } from "../models/VolunteerActionModel";
import ApiService from "./apiService";

const ENDPOINTS = {
  VOLUNTEER_ACTION: "volunteer-actions",
  VOLUNTEER_ACTIONS: "volunteer-actions/search",
  PAGE: "?pageNumber=",
  PAGE_SIZE: "&pageSize=",
  STATUSES: "volunteer-action-statuses",
};

export class VolunteerActionsService extends ApiService {
  getVolunteerActionsPagination = async (
    page: number = 1,
    pageSize: number = 50
  ) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.VOLUNTEER_ACTIONS +
        ENDPOINTS.PAGE +
        page +
        ENDPOINTS.PAGE_SIZE +
        pageSize,
      {}
    );
    return data;
  };

  getActionStatuses = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.STATUSES);
    return data;
  };

  addAction = async (payload: VolunteerActionDTOModel) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.VOLUNTEER_ACTION,
      payload
    );

    return data;
  };

  updateAction = async (payload: VolunteerActionDTOModel) => {
    const { data } = await this.apiClient.put(
      ENDPOINTS.VOLUNTEER_ACTION,
      payload
    );

    return data;
  };
}

const volunteerActionsService = new VolunteerActionsService();

export default volunteerActionsService;
