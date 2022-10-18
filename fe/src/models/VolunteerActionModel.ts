import { TypeModel } from "./TypeModel";
import { StatusModel } from "./StatusModel";

export interface VolunteerActionModel {
  id: number;
  type: TypeModel;
  imageURL: string;
  title: string;
  status: StatusModel;
  shortDescription: string;
  referenceNumber: string;
}
export interface VolunteerActionDTOModel {
  id?: number | null;
  typeId: number;
  imageURL: string;
  title: string;
  statusId: number;
  shortDescription: string;
  rawDescription: string;
  description: string;
  referenceNumber: string;
}
