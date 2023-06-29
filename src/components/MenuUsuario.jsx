import { Link } from "react-router-dom";

export const MenuUsuario = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg menu">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            <Link to={"/"} className="nav-link"> Inicio</Link>
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
                <Link to={"/peliculas-usuario"} className="nav-link"> Películas </Link>
              </li>
              <li className="nav-item">
                <Link to={"/clientes-usuario"} className="nav-link"> Clientes </Link>
              </li>
              <li className="nav-item"> 
                <Link to={"/productos-usuario"} className="nav-link"> Productos </Link>
              </li>
              <li className="nav-item">
                <Link to={"/proveedores-usuario"} className="nav-link"> Proveedores </Link>
              </li>
              <li className="nav-item">
                <Link to={"/empleados-usuario"} className="nav-link" > Empleados </Link> 
              </li>  
              <li className="nav-item">
                <Link to= {"/bovedas-usuario"} className="nav-link">  Contraseñas </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
