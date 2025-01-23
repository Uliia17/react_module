import {IProduct} from "./IProduct.ts";// тип, який описує відповідь від сервера

export type IProductsResponseModel = {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}