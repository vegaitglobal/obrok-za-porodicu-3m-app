import ApiService from "./apiService";

const ENDPOINTS = {
  VOLUNTEER_ACTIONS: "volunteer-actions/search",
  PAGE: "?pageNumber=",
  PAGE_SIZE: "&pageSize=",
};

export class VolunteerActionsService extends ApiService {
  getVolunteerActionsPagination = async (
    page: number = 1,
    pageSize: number = 10
  ) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.VOLUNTEER_ACTIONS +
        ENDPOINTS.PAGE +
        page +
        ENDPOINTS.PAGE_SIZE +
        pageSize,
      {}
    );

    console.log(data);

    return data;
  };
}

const volunteerActionsService = new VolunteerActionsService();

export default volunteerActionsService;
