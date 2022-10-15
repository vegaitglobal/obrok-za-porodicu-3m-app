export interface VolunteerActionType {
  id: number;
  name: string;
  hasPickup?: boolean;
  hasPayment?: boolean;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
}
