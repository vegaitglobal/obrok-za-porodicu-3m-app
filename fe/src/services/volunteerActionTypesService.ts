import { toast } from "react-toastify";
import { VolunteerActionTypeModel } from "../models/VolunteerActionTypeModel";
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
    try {
      const { data } = await this.apiClient.delete(
        ENDPOINTS.VOLUNTEER_ACTION_TYPE + id
      );

      toast.success("Uspešno brisanje tipa akcije.");

      return data;
    } catch (err) {
      toast.error("Greška prilikom brisanja tipa akcije.");
    }
  };

  addVolunteerActionType = async (payload: VolunteerActionTypeModel) => {
    try {
      const { data } = await this.apiClient.post(ENDPOINTS.VOLUNTEER_ACTION_TYPES, payload);

      toast.success("Uspešno dodavanje tipa akcije.");

      return data;
    } catch (err) {
      toast.error("Greška prilikom dodavanja tipa akcije.");
    }
  };

  updateVolunteerActionType = async (payload: VolunteerActionTypeModel) => {
    try {
      const { data } = await this.apiClient.put(ENDPOINTS.VOLUNTEER_ACTION_TYPES, payload);

      toast.success("Uspešna izmena tipa akcije.");

      return data;
    } catch (err) {
      toast.error("Greška prilikom izmene tipa akcije.");
    }
  };
}

const volunteerActionTypesService = new VolunteerActionTypesService();

export default volunteerActionTypesService;