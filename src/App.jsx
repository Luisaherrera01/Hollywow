import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Administrador from "./components/Administrador"
import PagUsuario from "./components/PagUsuario"
import PagAdmin from "./components/PagAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/Administrador",
    element: <Administrador />
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


