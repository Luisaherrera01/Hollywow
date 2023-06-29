import { Link, } from "react-router-dom";


export const MenuAdmin = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg menu">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            <Link to={"/"} className="nav-link">Inicio</Link>
          </div>
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
                <Link to={"/peliculas-admin"} className="nav-link">
                  Películas
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/listar-clientes"} className="nav-link"> Clientes </Link>
              </li>
              <li className="nav-item">
                <Link to={"/listar-productos"} className="nav-link"> Productos </Link>
              </li>
              <li className="nav-item">
              <Link to={"/listar-proveedores"} className="nav-link"> Proveedores </Link>
               </li>
              <li className="nav-item">
              <Link to={"/listar-empleados"} className="nav-link"> Empleados </Link>
              </li>
              <li className="nav-item">
              <Link to={"/listar-bovedas"} className="nav-link"> Contraseñas </Link>             
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
