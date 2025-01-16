import {Outlet} from "react-router";
import Menu from "../menus/Menu.tsx";

export const MainLayout = () => {
    return <div>
        <Menu/>
        <hr/>
        <Outlet/>
    </div>
};