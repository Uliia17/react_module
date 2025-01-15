import {UsersPage} from "../pages/UsersPage.tsx";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {createBrowserRouter} from "react-router";
import CartsPage from "../pages/CartsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: 'users',
                element: <UsersPage />, children:[
            {
                        path:':id/carts',
                        element: <CartsPage />
                    }
                ]
            },

        ],
    },
]);
