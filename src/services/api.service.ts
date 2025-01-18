import {IResponse} from "../models/IResponse.ts";

export const getAllUsers = async (pg:string):Promise<IResponse> => {
    return await fetch('https://dummyjson.com/users?skip='+pg)
        .then(value => value.json())
}