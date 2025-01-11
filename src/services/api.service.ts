import {ITodojson} from "../models/ITodojson.ts";

const getAllTodos = async ():Promise<ITodojson> => {

    const mainUrl = import.meta.env.VITE_API_URL;
    return await fetch(mainUrl)
        .then(value => value.json());
}

export {
    getAllTodos
}