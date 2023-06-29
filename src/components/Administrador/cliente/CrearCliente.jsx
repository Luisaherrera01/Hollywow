import { collection, addDoc } from "firebase/firestore";
import { dataBase, subirImagen } from "../../config/DataBase.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuAdmin } from "../../MenuAdmin";

const CrearCliente = () => {
  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [barrio, setBarrio] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [img, setImg] = useState(null);

  const returnListadoClientes = useNavigate();

  const agregarCliente = async () => {
    const urlImage = await subirImagen(img);
    const clienteColletion = collection(dataBase, "clientes");
    const cliente = {
      nombre,
      documento,
      correo,
      telefono,
      direccion,
      barrio,
      ciudad,
      urlImage,
    };

    await addDoc(clienteColletion, cliente);
    returnListadoClientes("/listar-clientes");
  };
  return (
    <section>
      <div>
        <MenuAdmin />
      </div>
      <h1 className="title">Clientes</h1>
      <div className="form-container">
        <div className="form">
          <form className="container">
            <div className="mb-3">
              <label htmlFor="nombre">Nombre </label>
              <input
                onChange={(e) => setNombre(e.target.value)}
                type={"text"}
                className="form-control"
                id="nombre"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="documento">Documento </label>
              <input
                onChange={(e) => setDocumento(e.target.value)}
                type={"text"}
                className="form-control"
                id="documento"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="correo">Correo </label>
              <input
                onChange={(e) => setCorreo(e.target.value)}
                type={"text"}
                className="form-control"
                id="correo"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono">Teléfono </label>
              <input
                onChange={(e) => setTelefono(e.target.value)}
                type={"text"}
                className="form-control"
                id="telefono"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion">Dirección </label>
              <input
                onChange={(e) => setDireccion(e.target.value)}
                type={"text"}
                className="form-control"
                id="direccion"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="barrio">Barrio </label>
              <input
                onChange={(e) => setBarrio(e.target.value)}
                type={"text"}
                className="form-control"
                id="barrio"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ciudad">Ciudad </label>
              <input
                onChange={(e) => setCiudad(e.target.value)}
                type={"text"}
                className="form-control"
                id="ciudad"
              />
            </div>

              <label>Foto </label><br />
              <input onChange={(e) => setImg(e.target.files[0])} type="file" />

            <input
              className="button"
              onClick={agregarCliente}
              type={"button"}
              value={"agregar cliente"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default CrearCliente;
