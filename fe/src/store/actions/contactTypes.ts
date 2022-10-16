import { DELETE_CONTACT, GET_CONTACTS } from "./actionTypes";

export const getContacts = () => {
  return { type: GET_CONTACTS };
};

export const deleteContact = (contactId: number) => {
  return { type: DELETE_CONTACT, payload: { contactId } };
};
