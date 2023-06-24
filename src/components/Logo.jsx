import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/imagenes/logo.png";

function Login() {
  const [isLoading, setIsLoading] = useState(true);

  //Simulamos un loader
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return (
    <section>
      {isLoading === true && <img className="logo" src={logo} />}

      {isLoading === false && (
        <div className="ingreso">
          <Link to={"/ingreso-admin"}className="admin">Administrador</Link>
          <Link to={"/usuario"} className="user">Usuario</Link>
        </div>
      )}
    </section>
  );
}

export default Login;
