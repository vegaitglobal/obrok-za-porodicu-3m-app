import { PaginationModel } from "./PaginationModel";
import { VolunteerActionModel } from "./VolunteerActionModel";

export interface VolunteerActionPageModel {
  content: VolunteerActionModel[];
  pagination: PaginationModel;
}
