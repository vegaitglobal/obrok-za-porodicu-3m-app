import {PaginationModel} from '../PaginationModel';
import {VolunteerActionDTO} from './VolunteerActionDTO';

export interface VolunteerPageModel {
  pagination: PaginationModel;
  filters: any;
  search: any;
  content: Array<VolunteerActionDTO>;
}
