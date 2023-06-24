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
    path: "/ingreso-admin",
    element: <LoginAdmin />
  },

  {
    path: "/administrador",
    element: <PagAdmin />
  },

  {
    path: "/usuario",
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


