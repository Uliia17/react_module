import {IUser} from "../models/IUser.ts";

const getUsers = async ():Promise<IUser[]> => {
   return await fetch('https://jsonplaceholder.typicode.com/users')
       .then(value => value.json());
}

// const getUser = async (id:string):Promise<IUser> => {
//    const user = await fetch('https://jsonplaceholder.typicode.com/users'+id)
//         .then(value => value.json());
//    return user;
// }
const getUser = async (id:string):Promise<IUser> => {
    return await fetch('https://jsonplaceholder.typicode.com/users'+id)
        .then(value => value.json());
}

export {
    getUsers,
    getUser
}