import axios from "axios";
import {ICar} from "../models/ICar.ts";

const axiosInstance = axios.create({
baseURL:import.meta.env.VITE_API_URL,
headers:{'Content-Type': 'application/json'}
});

export const getAllCars = async ():Promise<ICar[]> => {
  const newVar = await axiosInstance.get<ICar[]>('/cars');
  const cars = newVar.data;
  return cars;
}

