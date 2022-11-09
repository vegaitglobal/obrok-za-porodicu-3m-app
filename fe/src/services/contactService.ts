import { toast } from "react-toastify";
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
    try {
      const { data } = await this.apiClient.delete(ENDPOINTS.CONTACTS + "/" + id);

      toast.success("Uspešno brisanje kontakta.");

      return data;
    } catch (err) {
      toast.error("Greška prilikom brisanja kontakta.");
    }
  };

  addContact = async (payload: ContactModel) => {
    try {
      const { data } = await this.apiClient.post(ENDPOINTS.CONTACTS, payload);

      toast.success("Uspešno dodavanje kontakta.");
      
      return data;
    } catch (err) {
      toast.error("Greška prilikom dodavanja kontakta.");
    }
  };

  updateContact = async (payload: ContactModel) => {
    try {
      const { data } = await this.apiClient.put(ENDPOINTS.CONTACTS, payload);

      toast.success("Uspešna izmena kontakta.");

      return data;
    } catch (err) {
      toast.error("Greška prilikom izmene kontakta.");
    }
  };
}

const contactsService = new ContactsService();

export default contactsService;
