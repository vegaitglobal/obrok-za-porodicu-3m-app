import ApiService from "./apiService";

const ENDPOINTS = {
  CONTACTS: "contacts",
};

export class ContactsService extends ApiService {
  getContacts = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.CONTACTS);

    console.log(data);

    return data;
  };
}

const contactsService = new ContactsService();

export default contactsService;
