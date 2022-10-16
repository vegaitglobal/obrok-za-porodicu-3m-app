import { VolunteerActionDTOModel } from "../../models/VolunteerActionModel";
import {
  ADD_ACTION_STATUS,
  GET_VOLUNTEER_ACTIONS,
  GET_VOLUNTEER_ACTIONS_STATUSES,
} from "./actionTypes";

export const getVolunteerActions = () => {
  return { type: GET_VOLUNTEER_ACTIONS };
};
export const getActionStatuses = () => {
  return { type: GET_VOLUNTEER_ACTIONS_STATUSES };
};

export const addVolunteerActionStatus = (payload: VolunteerActionDTOModel) => {
  return { type: ADD_ACTION_STATUS, payload: payload };
};
