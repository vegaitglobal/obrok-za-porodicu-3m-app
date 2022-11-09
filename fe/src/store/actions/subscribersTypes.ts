import { SubscribersModel } from "../../models/SubscribersModel";
import { ADD_SUBSCRIBERS, DELETE_SUBSCRIBERS, GET_SUBSCRIBERS, UPDATE_SUBSCRIBERS } from "./actionTypes";

export const getSubscribers = () => {
  return { type: GET_SUBSCRIBERS };
};

export const addSubscribers = (payload: SubscribersModel) => {
  return { type: ADD_SUBSCRIBERS,  payload: payload };
};

export const updateSubscribers = (payload: SubscribersModel) => {
  return { type: UPDATE_SUBSCRIBERS,  payload: payload };
};

export const deleteSubscribers = (subscribersId: number) => {
  return { type: DELETE_SUBSCRIBERS, payload: { subscribersId } };
};
