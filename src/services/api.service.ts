import {ITodo} from "../models/ITodo.ts";

const getTodos = async ():Promise<ITodo []> => {

    const mainUrl = import.meta.env.VITE_API_URL;
    return await fetch(mainUrl)
        .then(value => value.json());
}

export {
    getTodos
}