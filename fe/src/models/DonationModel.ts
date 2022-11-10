import { VolunteerActionModel } from "./VolunteerActionModel";

export interface DonationModel {
  id: number;
  volunteerAction: VolunteerActionModel | null;
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
  volunteerActionId: number | null;
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
