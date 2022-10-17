import { ContactModel } from "../models/ContactModel";
import ApiService from "./apiService";

const ENDPOINTS = {
  CONTACTS: "contacts",
};

export class ContactsService extends ApiService {
  getContacts = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.CONTACTS);

    return data;
  };

  deleteContact = async (id: number) => {
    const { data } = await this.apiClient.delete(ENDPOINTS.CONTACTS + "/" + id);

    return data;
  };

  addContact = async (payload: ContactModel) => {
    const { data } = await this.apiClient.post(ENDPOINTS.CONTACTS, payload);

    return data;
  };

  updateContact = async (payload: ContactModel) => {
    const { data } = await this.apiClient.put(ENDPOINTS.CONTACTS, payload);

    return data;
  };
}

const contactsService = new ContactsService();

export default contactsService;
