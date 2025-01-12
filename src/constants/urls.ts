const baseURL = 'https://jsonplaceholder.typicode.com';
const urls = {
    users:{
        allUsers:baseURL+'/users',
        byId:(id:number) => {
            return baseURL+'/'+ id;
        }
    },
    posts:{}
}
export {
    urls
}