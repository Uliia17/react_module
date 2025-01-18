import {IUser} from "./IUser.ts";

export interface IResponse {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}