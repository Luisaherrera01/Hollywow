import {Link} from "react-router-dom"
import ListarClientes from "./Administrador/cliente/ListarCliente";

export const MenuNavegacion = () => {
  return (
    <section>
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Inicio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Peliculas
                </a>
              </li>
              <li className="nav-item">
    
                  <Link to ={'/crearcliente'} className="nav-link"> Clientes </Link>
                  
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Proveedores
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Empleados
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contraseñas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
      <body>
      <ListarClientes/>
      </body>
    </section>

  );
};
