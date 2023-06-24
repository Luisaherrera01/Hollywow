import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logo from "./components/Logo";
import LoginAdmin from "./components/LoginAdmin"
import PagUsuario from "./components/Usuario/PagUsuario"
import PagAdmin from "./components/Administrador/PagAdmin"
import CrearCliente from "./components/Administrador/cliente/CrearCliente"
import EditarCliente from "./components/Administrador/cliente/EditarCliente"
import ListarCliente from "./components/Administrador/cliente/ListarCliente"

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

  {
    path: "/crearcliente",
    element: <CrearCliente/>
  },

  {
    path: "/editarcliente",
    element: <EditarCliente/>
  }, 

  {
    path: "/listarcliente",
    element: <ListarCliente/>
  }

])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App


