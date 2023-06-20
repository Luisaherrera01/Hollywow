import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/imagenes/Hollywow.png";

function Login() {
  const [isLoading, setIsLoading] = useState(true);

  //Simulamos un loader
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <section>
      {isLoading === true && <img className="Logo" src={logo} />}

      {isLoading === false && (
        <div>
          <Link to={"/Administrador"}>Administrador</Link>
          <Link to={"/PagUsuario"}>Usuario</Link>
        </div>
      )}
    </section>
  );
}

export default Login;
