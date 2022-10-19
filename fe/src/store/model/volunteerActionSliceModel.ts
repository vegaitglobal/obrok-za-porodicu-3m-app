import { PaginationModel } from "../../models/PaginationModel";
import { VolunteerActionModel } from "../../models/VolunteerActionModel";
import { VolunteerActionStatusModel } from "../../models/VolunteerActionStatusModel";

export interface VolunteerActionSliceModel {
  volunteerActions: VolunteerActionModel[];
  volunteerActionStatuses: VolunteerActionStatusModel[];
  allVolunteerActions: VolunteerActionModel[];
  searchTerm: string;
  actionTypeIds: number[];
  pagination: PaginationModel;
}
