import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModel} from "../models/IProductsResponseModel.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {// типізація логінації
    username: string,
    password: string,
    expiresInMins: number
}

const axiosInstance = axios.create({// змінна для виконання запитів
baseURL:'https://dummyjson.com',// вказує базову URL-адресу для всіх запитів
headers:{}// заголовок (не використовується)
});

axiosInstance.interceptors.request.use((request) => {// інтерцептор перехоплює гетові запити перед відправленням на сервер, функція-обробник use
    if (request.method?.toUpperCase() === 'GET') {// у випадку якщо робимо гетовий запит (? може і не бути) використовуємо метод великі літери (зазвичай так позначають) в розділ хедер додаємо Authorization, який дорівнює 'Bearer ' + ін-ція з локал сторідж
        request.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;// витягуємо accessToken
    }// за допомогою парс перетворюємо дані з локал сторіджу на об'єкт
    return request;// після додавання заголовка повертаємо об'єкт
})

export const login = async ({username, password, expiresInMins}: LoginData):Promise<IUserWithTokens> => {// функція для авторизації, яка робить пост-запит і зберігає токени
  const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/auth/login', {username, password, expiresInMins});// відправляємо пост-запит
    console.log(userWithTokens);// просто виведення інформації
    localStorage.setItem('user', JSON.stringify(userWithTokens));// зберігає отримані дані у локальному сховищі за допомогою JSON
    return userWithTokens;// функція повертає об'єкт userWithTokens
}

export const loadAuthProducts = async ():Promise<IProduct[]> => {// асинхронна функція, яка повертає проміс, який прогружає масив IProduct[]
  const {data:{products}} = await axiosInstance.get<IProductsResponseModel>('/products');// використовується гет-запит
  return products;// після деструктуризації повертається масив продуктів
}

export const refresh = async () => {// використовується для оновлення токенів
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');// отримуємо дані користувача з локального сховища

    const {data:{accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/auth/refresh',// відправляється пост-запит на сервер
      {refreshToken: iUserWithTokens.refreshToken, expiresInMin:1});// час життя нового токена

    console.log(...accessToken);
    console.log(...refreshToken)

    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken // оновлюються новими значеннями токенів

    localStorage.setItem('user', JSON.stringify(iUserWithTokens))// оновлений об'єкт перетворюється на JSON-рядок і зберігається в локальному сховищі, таким чином, наступні запити зможуть використовувати новий accessToken для авторизації
}
