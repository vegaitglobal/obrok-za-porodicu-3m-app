import { VolunteerActionDTOModel } from "../../models/VolunteerActionModel";
import {
  ADD_VOLUNTEER_ACTION,
  GET_VOLUNTEER_ACTIONS,
  GET_VOLUNTEER_ACTIONS_STATUSES,
  UPDATE_VOLUNTEER_ACTION,
} from "./actionTypes";

export const getVolunteerActions = () => {
  return { type: GET_VOLUNTEER_ACTIONS };
};

export const getActionStatuses = () => {
  return { type: GET_VOLUNTEER_ACTIONS_STATUSES };
};

export const addVolunteerAction = (payload: VolunteerActionDTOModel) => {
  return { type: ADD_VOLUNTEER_ACTION, payload: payload };
};

export const updateVolunteerAction = (payload: VolunteerActionDTOModel) => {
  return { type: UPDATE_VOLUNTEER_ACTION, payload: payload };
};
