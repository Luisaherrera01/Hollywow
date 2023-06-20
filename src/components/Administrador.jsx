import { useState } from "react";
import { Link } from "react-router-dom"

const nameAdmin = "Hollywow123";
const passwordAdmin = "H12345";

function FormAdministrador() {
  const [nombreAdministrador, setNombreAdministrador] = useState("");
  const [contrasenaAdministrador, setContrasenaAdministrador] = useState("");
  const [errorInput, setErrorInput] = useState(false);

  const validateForm = (e) => {
    e.preventDefault();
    if (
      nombreAdministrador === nameAdmin &&
      contrasenaAdministrador === passwordAdmin
    ) {
      console.log("Es administrador");
      setErrorInput(false);
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
    <section>
      <form onSubmit={validateForm}>
        <div>
          <label>Administrador:</label>
          <input
            type="text"
            value={nombreAdministrador}
            onChange={handleNameInputChange}
          />
          <label>contraseña:</label>
          <input
            type="text"
            value={contrasenaAdministrador}
            onChange={handlePasswordInputChange}
          />
        </div>
        <Link to={"/Ingresar"}>Ingresar</Link>
        {errorInput === true && <span>Usuario o contraseña no válido</span>}
        
      </form>
    </section>
  );
}

export default FormAdministrador;
