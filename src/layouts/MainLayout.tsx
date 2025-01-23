import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";

export const MainLayout= () => {// загальне компонування сторінок.
    return (// Menu - макет сторінок// Outlet використовується для керування (переходу) сторінками, відображення контенту
        <>
            <Menu/>
            <Outlet/>
         </>
    );
}