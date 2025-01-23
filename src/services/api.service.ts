import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModel} from "../models/IProductsResponseModel.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {
    username: string,
    password: string,
    expiresInMins: number
}

const axiosInstance = axios.create({
baseURL:'https://dummyjson.com',
headers:{}
});

axiosInstance.interceptors.request.use((request) => {
    if (request.method?.toUpperCase() === 'GET') {
        request.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return request;
})

export const login = async ({username, password, expiresInMins}: LoginData):Promise<IUserWithTokens> => {
  const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/auth/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

export const loadAuthProducts = async ():Promise<IProduct[]> => {
  const {data:{products}} = await axiosInstance.get<IProductsResponseModel>('/products');
  return products;
}

export const refresh = async () => {
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');

    const {data:{accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/auth/refresh',
      {refreshToken: iUserWithTokens.refreshToken, expiresInMin:1});

    console.log(...accessToken);
    console.log(...refreshToken)

    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken

    localStorage.setItem('user', JSON.stringify(iUserWithTokens))
}
