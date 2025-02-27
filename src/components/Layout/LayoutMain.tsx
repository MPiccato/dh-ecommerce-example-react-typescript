import { Outlet } from "react-router-dom"
import { NavBar } from "../ui/NavBar/NavBar"

export const LayoutMain = () => {
  return (
    <div>
        <NavBar/>
        LayoutMain
        <Outlet/> //Renderiza los elementos hijos de la ruta actual
    </div>
  )
}
