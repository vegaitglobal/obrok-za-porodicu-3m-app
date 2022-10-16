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
