import ApiService from "./apiService";

const ENDPOINTS = {
  VOLUNTEER_ACTIONS: "volunteer-actions",
  PAGE: "?page=",
  PAGE_SIZE: "&page-size=",
};

export class VolunteerActionsService extends ApiService {
  getVolunteerActionsPagination = async (
    page: number = 0,
    pageSize: number = 0
  ) => {
    const { data } = await this.apiClient.get(
      ENDPOINTS.VOLUNTEER_ACTIONS +
        ENDPOINTS.PAGE +
        page +
        ENDPOINTS.PAGE_SIZE +
        pageSize
    );

    return data;
  };
}

const volunteerActionsService = new VolunteerActionsService();

export default volunteerActionsService;
