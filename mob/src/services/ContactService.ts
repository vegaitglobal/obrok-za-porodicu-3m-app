import { ResponseModel } from "../models/ResponseModel";


interface IContactService {
  getContacts(): Promise<ResponseModel | null>;
}

class ContactService implements IContactService {
  async getContacts(): Promise<ResponseModel> {
    try {  
      throw new Error("Method not implemented.");
      // TODO: Remove or implement this method
      // return Promise.resolve();
    } catch (error: any) {
      return Promise.reject(error);
    }
  }
}

export default new ContactService();
