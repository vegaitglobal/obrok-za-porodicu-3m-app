import {
  DELETE_VOLUNTEER_ACTION_TYPE,
  GET_VOLUNTEER_ACTION_TYPES,
} from "./actionTypes";

export const getVolunteerActionTypes = () => {
  return { type: GET_VOLUNTEER_ACTION_TYPES };
};

export const deleteActionType = (actionTypeId: number) => {
  return { type: DELETE_VOLUNTEER_ACTION_TYPE, payload: { actionTypeId } };
};