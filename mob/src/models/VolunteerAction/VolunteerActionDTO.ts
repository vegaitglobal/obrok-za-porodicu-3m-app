export interface VolunteerActionDTO {
  id: number;
  type: ActionType;
  imageURL?: string;
  title: string;
  status: ActionStatus;
  shortDescription: string;
  referenceNumber?: string;
  description: string;
}

export interface ActionType {
  id: number;
  name: string;
  hasPickup?: boolean;
  hasPayment?: boolean;
}

interface ActionStatus {
  id: number;
  name: string;
}
