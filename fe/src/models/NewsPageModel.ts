import { PaginationModel } from "./PaginationModel";
import { NewsModel } from "./NewsModel";

export interface NewsPageModel {
  content: NewsModel[];
  pagination: PaginationModel;
}
