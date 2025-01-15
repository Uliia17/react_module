const baseURL = import.meta.env.VITE_BASE_URL;

export const getAll = async <T>(endpoint: string): Promise<T> => {
    return await fetch(`${baseURL}${endpoint}`).then(value => value.json());
}


