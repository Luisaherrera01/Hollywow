import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logo from "./components/Logo"
import LoginAdmin from "./components/LoginAdmin"
import PagAdmin from "./components/Administrador/PagAdmin"
import CrearCliente from "./components/Administrador/cliente/CrearCliente"
import EditarCliente from "./components/Administrador/cliente/EditarCliente"
import ListarCliente from "./components/Administrador/cliente/ListarCliente"
import CrearContraseña from "./components/Administrador/contraseñas/CrearContraseña"
import EditarContraseña from "./components/Administrador/contraseñas/EditarContraseña"
import ListarContraseña from "./components/Administrador/contraseñas/ListarContraseña"
import PagUsuario from "./components/Usuario/PagUsuario"
import PeliculasAdmin from "./components/Peliculas/PeliculasAdmin"
import PeliculasUsuario from "./components/Peliculas/PeliculasUsuario"
import ListarClientesUsuario from "./components/Usuario/ListarClientesUsuario"
import ListarContraseñasUsuario from "./components/Usuario/ListarContraseñasUsuario"

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
    path: "/editarCliente/:id",
    element: <EditarCliente/>
  }, 

  {
    path: "/listar-clientes",
    element: <ListarCliente/>
  },

  {
    path:"/crear-boveda",
    element: <CrearContraseña/>
  },

  {
    path:"/editarBoveda/:id",
    element: <EditarContraseña/>
  },

  {
    path:"/listar-bovedas",
    element: <ListarContraseña/>
  },
/*
  {
    path:"/crear-empleado",
    element: <CrearEmpleado/>
  },

  {
    path:"/editarEmpleado/:id",
    element: <EditarEmpleado/>
  },

  {
    path:"/listar-empleados",
    element: <ListarEmpleado/>
  },

  {
    path:"/crear-producto",
    element: <CrearProducto/>
  },

  {
    path:"/editarProducto/:id",
    element: <EditarProducto/>
  },

  {
    path:"/listar-productos",
    element: <ListarProducto/>
  },

  {
    path:"/crear-proveedor",
    element: <CrearProveedor/>
  },

  {
    path:"/editarProveedor/:id",
    element: <EditarProducto/>
  },

  {
    path:"/listar-proveedores",
    element: <ListarProducto/>
  }*/

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
  },

  {
    path: "/bovedas-usuario",
    element:<ListarContraseñasUsuario/>
  },


/*  {
    path: "/productos-usuario",
    element:<ListarProductosUsuario/>
  },

  
  {
    path: "/empleados-usuario",
    element:<ListarEmpleadosUsuario/>
  },

  {
    path: "/proveedores-usuario",
    element:<ListarProveedoresUsuario/>
  }*/
    
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App


