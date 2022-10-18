import { ContactModel } from "../../models/ContactModel";
import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS, UPDATE_CONTACT } from "./actionTypes";

export const getContacts = () => {
  return { type: GET_CONTACTS };
};

export const addContact = (payload: ContactModel) => {
  return { type: ADD_CONTACT,  payload: payload };
};

export const updateContact = (payload: ContactModel) => {
  return { type: UPDATE_CONTACT,  payload: payload };
};

export const deleteContact = (contactId: number) => {
  return { type: DELETE_CONTACT, payload: { contactId } };
};
