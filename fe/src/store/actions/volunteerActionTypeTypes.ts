import {
  DELETE_VOLUNTEER_ACTION_TYPE,
  GET_VOLUNTEER_ACTION_TYPES,
  ADD_VOLUNTEER_ACTION_TYPE,
  UPDATE_VOLUNTEER_ACTION_TYPE
} from "./actionTypes";
import { VolunteerActionTypeModel } from "../../models/VolunteerActionTypeModel";

export const getVolunteerActionTypes = () => {
  return { type: GET_VOLUNTEER_ACTION_TYPES };
};

export const addVolunteerActionType = (payload: VolunteerActionTypeModel) => {
  return { type: ADD_VOLUNTEER_ACTION_TYPE,  payload: payload };
};

export const updateVolunteerActionType = (payload: VolunteerActionTypeModel) => {
  return { type: UPDATE_VOLUNTEER_ACTION_TYPE,  payload: payload };
};

export const deleteActionType = (actionTypeId: number) => {
  return { type: DELETE_VOLUNTEER_ACTION_TYPE, payload: { actionTypeId }};
};