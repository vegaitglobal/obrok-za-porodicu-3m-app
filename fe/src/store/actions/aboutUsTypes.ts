import { AboutUsModel } from "../../models/AboutUsModel";
import { GET_ABOUT_US, UPDATE_ABOUT_US } from "./actionTypes";

export const getAboutUs = () => {
  return { type: GET_ABOUT_US };
};

export const updateAboutUs = (payload: AboutUsModel) => {
  return { type: UPDATE_ABOUT_US,  payload: payload };
};

