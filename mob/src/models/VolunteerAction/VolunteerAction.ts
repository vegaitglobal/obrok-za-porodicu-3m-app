import {VolunteerActionStatus} from './VolunteerActionStatus';
import {VolunteerActionType} from './VolunteerActionType';

export interface VolunteerAction {
  id: number;
  type: VolunteerActionType;
  imageUrl?: string;
  title: string;
  status: VolunteerActionStatus;
  shortDescription: string;
  rawDescription: string;
  description: string;
  referenceNumber?: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
}
