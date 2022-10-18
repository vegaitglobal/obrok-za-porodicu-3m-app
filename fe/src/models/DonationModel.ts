import { VolunteerActionModel } from "./VolunteerActionModel";

export interface DonationModel {
  id: number;
  volunteerAction: VolunteerActionModel;
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
  volunteerActionId: number
  isCompany: boolean;
  companyName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  description: string;
  isPickup: boolean;
  address: string;
  volunteerActionTypeId?: number | null
}
