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
