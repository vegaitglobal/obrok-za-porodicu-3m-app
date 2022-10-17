import { VolunteerActionTypeModel } from "./VolunteerActionTypeModel";

export interface DonationModel {
  id: number;
  volunteerActionType: VolunteerActionTypeModel;
  isCompany: boolean;
  companyName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  description: string;
  isPickup: boolean;
  address: string;
}

export interface DonationDTOModel {
  id?: number | null;
  volunteerActionTypeId: number;
  isCompany: boolean;
  companyName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  description: string;
  isPickup: boolean;
  address: string;
  volunteerActionId?: number | null
}
