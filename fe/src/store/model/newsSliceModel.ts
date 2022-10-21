import { NewsModel } from "../../models/NewsModel";
import { PaginationModel } from "../../models/PaginationModel";

export interface NewsSliceModel {
  news: NewsModel[];
  pagination: PaginationModel;
}
