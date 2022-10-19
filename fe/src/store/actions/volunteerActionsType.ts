import { PaginationModel } from "../../models/PaginationModel";
import { VolunteerActionDTOModel } from "../../models/VolunteerActionModel";
import { VolunteerActionsPaginationPayloadModel } from "../../models/VolunteerActionsPaginationPayloadModel";
import {
  ADD_VOLUNTEER_ACTION,
  GET_VOLUNTEER_ACTIONS,
  GET_VOLUNTEER_ACTIONS_STATUSES,
  ADD_ACTION_TYPE_ID_VOLUNTEER_ACTIONS,
  SET_SEARCH_TERM_VOLUNTEER_ACTIONS,
  UPDATE_VOLUNTEER_ACTION,
  REMOVE_ACTION_TYPE_ID_VOLUNTEER_ACTIONS,
  GET_ALL_VOLUNTEER_ACTIONS,
  SET_PAGINATION_VOLUNTEER_ACTIONS,
} from "./actionTypes";

export const getVolunteerActions = (payload: VolunteerActionsPaginationPayloadModel) => {
  return { type: GET_VOLUNTEER_ACTIONS, payload: payload };
};

export const getAllVolunteerActions = () => {
  return { type: GET_ALL_VOLUNTEER_ACTIONS };
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

export const setSearchTermVolunteerActions = (payload: string) => {
  return { type: SET_SEARCH_TERM_VOLUNTEER_ACTIONS, payload: payload };
};

export const addActionTypeIdVolunteerActions = (payload: number) => {
  return { type: ADD_ACTION_TYPE_ID_VOLUNTEER_ACTIONS, payload: payload };
};

export const removeActionTypeIdVolunteerActions = (payload: number) => {
  return { type: REMOVE_ACTION_TYPE_ID_VOLUNTEER_ACTIONS, payload: payload };
};

export const setPaginationVolunteerActions = (payload: PaginationModel) => {
  return { type: SET_PAGINATION_VOLUNTEER_ACTIONS, payload: payload };
};
