import { ActionsFilterModel } from "../models/ActionsFilterModel";
import { VolunteerActionDTOModel } from "../models/VolunteerActionModel";
import ApiService from "./apiService";

const ENDPOINTS = {
  VOLUNTEER_ACTION: "volunteer-actions",
  VOLUNTEER_ACTIONS: "volunteer-actions/search",
  PAGE: "?pageNumber=",
  PAGE_SIZE: "&pageSize=",
  STATUSES: "volunteer-action-statuses",
};

const DEFAULT_PAGE_NUMBER: number = 1;
const DEFAULT_PAGE_SIZE: number = 9;
const DEFAULT_FILTER: ActionsFilterModel = {
  "actionTypeIds": [
  ],
  "searchTerm": ""
};

export class VolunteerActionsService extends ApiService {
  getVolunteerActionsPagination = async (
    page: number = DEFAULT_PAGE_NUMBER,
    filter: ActionsFilterModel = DEFAULT_FILTER,
    pageSize: number = DEFAULT_PAGE_SIZE,
  ) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.VOLUNTEER_ACTIONS +
      ENDPOINTS.PAGE +
      page +
      ENDPOINTS.PAGE_SIZE +
      pageSize,
      filter
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

  getAllVolunteerActions = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.VOLUNTEER_ACTION);
    return data;
  };

  deleteVolunteerAction = async (id: number) => {
    const { data } = await this.apiClient.delete(
      ENDPOINTS.VOLUNTEER_ACTION + "/" + id
    );

    return data;
  };
}

const volunteerActionsService = new VolunteerActionsService();

export default volunteerActionsService;
