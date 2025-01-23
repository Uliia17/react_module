import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";

export const routes = createBrowserRouter([// налаштування маршрутів
    {
        path:'/', element:<MainLayout/>, children:[// масив зі шляхами (початковий шлях та елемент, який за нього відповідає)
            {index:true, element:<HomePage/>},// головна сторінка
            {path:'login', element:<LoginPage/>},// сторінка авторизації
            {path:'/auth/resources', element:<AuthResourcesPage/>}// сторінка із захищеним контентом
        ]
    }
]);