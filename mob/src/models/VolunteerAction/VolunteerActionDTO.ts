export interface VolunteerActionDTO {
  id: number;
  type: ActionType;
  imageUrl?: string;
  title: string;
  status: ActionStatus;
  shortDescription: string;
  referenceNumber?: string;
}

export interface ActionType {
  id: number;
  name: string;
}

interface ActionStatus {
  id: number;
  name: string;
}
