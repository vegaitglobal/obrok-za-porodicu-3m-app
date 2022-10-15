import ApiService from "./apiService";

const ENDPOINTS = {
  VOLUNTEER_ACTION_TYPES: "volunteer-action-types",
};

export class VolunteerActionTypesService extends ApiService {
  getVolunteerActionTypes = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.VOLUNTEER_ACTION_TYPES);

    return data;
  };
}

const volunteerActionsService = new VolunteerActionTypesService();

export default volunteerActionsService;
