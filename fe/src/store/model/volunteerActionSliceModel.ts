import { VolunteerActionModel } from "../../models/VolunteerActionModel";
import { VolunteerActionStatusModel } from "../../models/VolunteerActionStatusModel";

export interface VolunteerActionSliceModel {
  volunteerActions: VolunteerActionModel[];
  volunteerActionStatuses: VolunteerActionStatusModel[];
}
