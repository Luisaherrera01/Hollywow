import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logo from "./components/Logo";
import LoginAdmin from "./components/LoginAdmin"
import PagAdmin from "./components/Administrador/PagAdmin"
import CrearCliente from "./components/Administrador/cliente/CrearCliente"
import EditarCliente from "./components/Administrador/cliente/EditarCliente"
import ListarCliente from "./components/Administrador/cliente/ListarCliente"
import PagUsuario from "./components/Usuario/PagUsuario";
import PeliculasAdmin from "./components/Peliculas/PeliculasAdmin";
import PeliculasUsuario from "./components/Peliculas/PeliculasUsuario";
import ListarClientesUsuario from "./components/Usuario/ListarClientesUsuario";

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
    path: "/peliculas-admin",
    element: <PeliculasAdmin />
  },

  {
    path: "/peliculas-usuario",
    element: <PeliculasUsuario />
  },

  {
    path: "/crear-cliente",
    element: <CrearCliente/>
  },

  {
    path: "/editar/:id",
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
  },

  {
    path: "/clientes-usuario",
    element:<ListarClientesUsuario/>
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


