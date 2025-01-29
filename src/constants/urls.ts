const baseURL = 'https://jsonplaceholder.typicode.com';

const createUrl = (endpoint: string) => ({
    all: `${baseURL}/${endpoint}`,
    byId: (id: number) => `${baseURL}/${endpoint}/${id}`
});

const urls = {
    users: createUrl('users'),
    posts: createUrl('posts'),
    comments: createUrl('comments')
};

export {
    urls
};
