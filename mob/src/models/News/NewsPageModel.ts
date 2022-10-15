import {PaginationModel} from '../PaginationModel';
import {NewsDTO} from './NewsDTO';

export interface NewsPageModel {
  pagination: PaginationModel;
  content: Array<NewsDTO>;
}
