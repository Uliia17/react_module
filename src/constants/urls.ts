const baseURL = import.meta.env.VITE_API_URL;

const urls = {
    users: {
        allUsers: (pg: string) => `${baseURL}?skip=${pg}&limit=30`
    }
};

export {urls};
