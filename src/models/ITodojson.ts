import {ITodo} from "./ITodo.ts";

export interface ITodojson {
  todos: ITodo[];
  total: number;
  skip: number;
  limit: number;
}