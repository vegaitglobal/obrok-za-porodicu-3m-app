import {PaginationModel} from '../PaginationModel';
import {VolunteerActionDTO} from './VolunteerAction';

export interface VolunteerPageModel {
  pagination: PaginationModel;
  filters: any;
  search: any;
  content: Array<VolunteerActionDTO>;
}
