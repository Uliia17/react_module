import {IResponse} from "../models/IResponse.ts";

export const getAllUsers = async (pg:string):Promise<IResponse> => {
    return await fetch('https://reqres.in/api/users?page='+pg)
        .then(value => value.json())
}