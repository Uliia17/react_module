import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage.tsx";
import Layout from "../layouts/Layout.tsx";
import PostsPage from "../pages/PostsPage.tsx";

export const routes = createBrowserRouter([{
    path:'/', element:<Layout/>, children:[
        {path:'users', element:<UsersPage/>},
        {path:'posts', element:<PostsPage/>}
    ]}
]);
