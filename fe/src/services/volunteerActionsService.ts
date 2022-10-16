import { VolunteerActionDTOModel } from "../models/VolunteerActionModel";
import ApiService from "./apiService";

const ENDPOINTS = {
  ADD_VOLUNTEER_ACTION: "volunteer-actions",
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

  addActionStatus = async (payload: VolunteerActionDTOModel) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.ADD_VOLUNTEER_ACTION,
      payload
    );

    console.log(data);

    return data;
  };
}

const volunteerActionsService = new VolunteerActionsService();

export default volunteerActionsService;
