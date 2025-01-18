import { IResponse } from "../models/IResponse";
import { urls } from "../constants/urls";

export const getAllUsers = async (pg: string): Promise<IResponse> => {
    const response = await fetch(urls.users.allUsers(pg));
    return await response.json();
};
