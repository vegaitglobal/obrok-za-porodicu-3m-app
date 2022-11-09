import { toast } from "react-toastify";
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
    try {
      const { data } = await this.apiClient.post(
        ENDPOINTS.VOLUNTEER_ACTION,
        payload
      );

      toast.success("Uspešno kreiranje akcije.");

      return data;
    } catch (err) {
      toast.error("Greška prilikom kreiranja akcije.");
    }
  };

  updateAction = async (payload: VolunteerActionDTOModel) => {
    try {
      const { data } = await this.apiClient.put(
        ENDPOINTS.VOLUNTEER_ACTION,
        payload
      );

      toast.success("Uspešna izmena akcije.");

      return data;
    } catch (err) {
      toast.error("Greška prilikom izmene akcije.");
    }
  };

  getAllVolunteerActions = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.VOLUNTEER_ACTION);
    return data;
  };

  deleteVolunteerAction = async (id: number) => {
    try {
      const { data } = await this.apiClient.delete(
        ENDPOINTS.VOLUNTEER_ACTION + "/" + id
      );

      toast.success("Uspešno brisanje akcije.");

      return data;
    } catch (err) {
      toast.error("Greška prilikom brisanja akcije.");
    }
  };
}

const volunteerActionsService = new VolunteerActionsService();

export default volunteerActionsService;
