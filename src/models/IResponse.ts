import {IUser} from "./IUser.ts";
import {ISupport} from "./ISupport.ts";

export interface IResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: ISupport;
}