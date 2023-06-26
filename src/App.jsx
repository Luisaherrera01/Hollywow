import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logo from "./components/Logo";
import LoginAdmin from "./components/LoginAdmin"
import Peliculas from "./components/Peliculas/PeliculasUsuario"
import PagAdmin from "./components/Administrador/PagAdmin"
import CrearCliente from "./components/Administrador/cliente/CrearCliente"
import EditarCliente from "./components/Administrador/cliente/EditarCliente"
import ListarCliente from "./components/Administrador/cliente/ListarCliente"
import PagUsuario from "./components/Usuario/PagUsuario";

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
    path: "/peliculas",
    element: <Peliculas />
  },

  {
    path: "/crear-cliente",
    element: <CrearCliente/>
  },

  {
    path: "/editar-cliente",
    element: <EditarCliente/>
  }, 

  {
    path: "/listar-clientes",
    element: <ListarCliente/>
  },

  {
    path: "/usuario",
    element: <PagUsuario/>
  },

  {
    path: "/administrador",
    element:<PagAdmin/>
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


