import axios from 'axios';
import {IUser} from "../models/IUser.ts";
// import {IUser} from "../models/IUser.ts";

let axiosInstance= axios.create({
baseURL:'https://jsonplaceholder.typicode.com',
headers:{'Content-Type':'application/json'}
});

axiosInstance.interceptors.request.use((request) => {
    console.log(request);
    request.headers.set('XXX', 'XXXX');
    return request;
})

export const getAllUsers = async ():Promise<IUser[]> =>{
    const {data} = await axiosInstance.get<IUser[]>('/users');
    // console.log(response)
    return data;
}

export const saveUser = async (user:IUser):Promise<IUser> => {
const {data} = await axiosInstance.post<IUser>('/users', user);
    return data;
}

// axiosInstance.get<IUser[]>('/users')
// axiosInstance.interceptors.response.use((response) => {
//     console.log(response);
//     return response;
// })