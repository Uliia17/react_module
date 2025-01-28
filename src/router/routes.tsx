import {createBrowserRouter} from "react-router-dom";
import PostsPage from "../pages/PostsPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import UserPage from "../pages/UserPage.tsx";
import MainLayout from "../layouts/Layout.tsx";


export const routes = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {path:'users', element:<UsersPage/>},
            {path:'users/:id', element:<UserPage/>},
            {path:'posts', element:<PostsPage/>}
        ]}
])