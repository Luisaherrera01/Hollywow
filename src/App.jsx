import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logo from "./components/Logo";
import LoginAdmin from "./components/LoginAdmin"
import PagUsuario from "./components/Usuario/PagUsuario"
import PagAdmin from "./components/Administrador/PagAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Logo />
  },
  {
    path: "/Administrador",
    element: <LoginAdmin />
  },

  {
    path: "/Ingresar",
    element: <PagAdmin />
  },

  {
    path: "/PagUsuario",
    element: <PagUsuario />
  },

])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App


