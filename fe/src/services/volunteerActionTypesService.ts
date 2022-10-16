import ApiService from "./apiService";

const ENDPOINTS = {
  VOLUNTEER_ACTION_TYPES: "volunteer-action-types",
  VOLUNTEER_ACTION_TYPE: "volunteer-action-types/",
};

export class VolunteerActionTypesService extends ApiService {
  getVolunteerActionTypes = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.VOLUNTEER_ACTION_TYPES);

    return data;
  };

  deleteActionType = async (id: number) => {
    const { data } = await this.apiClient.delete(
      ENDPOINTS.VOLUNTEER_ACTION_TYPE + "/" + id
    );

    return data;
  };
}

const volunteerActionTypesService = new VolunteerActionTypesService();

export default volunteerActionTypesService;
