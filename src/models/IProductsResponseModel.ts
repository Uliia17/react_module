import {IProduct} from "./IProduct.ts";

export type IProductsResponseModel = {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}