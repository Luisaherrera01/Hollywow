import { useState } from "react";
import { useNavigate } from "react-router-dom"

const nameAdmin = "admin";
const passwordAdmin = "123";

function FormAdministrador() {
  const [nombreAdministrador, setNombreAdministrador] = useState("");
  const [contrasenaAdministrador, setContrasenaAdministrador] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const navigate = useNavigate();

  const validateForm = (e) => {
    e.preventDefault();
    if (
      nombreAdministrador === nameAdmin &&
      contrasenaAdministrador === passwordAdmin
    ) {
      console.log("Es administrador");
      setErrorInput(false);
      navigate('/administrador')
    } else {
      setErrorInput(true);
    }
  };

  const handleNameInputChange = (event) => {
    setNombreAdministrador(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    setContrasenaAdministrador(event.target.value);
  };

  return (
    <section className="login">
      <form className="login-form" onSubmit={validateForm}>
      <h1 className="login-title"> Administrador</h1>
        <div>
          <label className="administrador">Administrador:</label>
          <input
            type="text"
            value={nombreAdministrador}
            onChange={handleNameInputChange}
          />
          <label className="password">contraseña:</label>
          <input
            type="password"
            value={contrasenaAdministrador}
            onChange={handlePasswordInputChange}
          />
        </div>
        {errorInput === true && <span className="text-danger">Usuario o contraseña no válido</span>}
        <button type="submit" className="btn login-boton mt-3">Ingresar</button>
        <button type="submit" className="btn boton-regresar mt-3"> Volver</button>
        
      </form>
    </section>
  );
}

export default FormAdministrador;


