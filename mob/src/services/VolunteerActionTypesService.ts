import {VolunteerActionTypeModel} from '../models/VolunteerActionTypeModel';

interface IVolunteerActionTypeService {
  getVolunteerActionTypes(): Promise<VolunteerActionTypeModel[] | null>;
}

class VolunteerActionTypeService implements IVolunteerActionTypeService {
  getVolunteerActionTypes(): Promise<VolunteerActionTypeModel[] | null> {
    throw new Error('Method not implemented.');
  }
}

export default new VolunteerActionTypeService();
