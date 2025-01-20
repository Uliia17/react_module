import './App.css'
import {Menu} from "./menu/Menu.tsx";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <>
      <Menu/>
      <Outlet/>
    </>
  )
}

export default App
