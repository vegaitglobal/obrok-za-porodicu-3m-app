export interface DonationModel {
  volunteerActionTypeId: any;
  isCompany: boolean;
  companyName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  description?: string;
  isPickup: boolean;
  address: string;
  volunteerActionId?: number | null;
}
