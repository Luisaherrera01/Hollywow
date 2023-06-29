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
              <label htmlFor="nombre">Nombre</label>
              <input
                onChange={(e) => setNombre(e.target.value)}
                /* placeholder={"Nombre"} */
                type={"text"}
                className="form-control"
                id="nombre"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={(e) => setDocumento(e.target.value)}
                placeholder={"Documento"}
                type={"text"}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={(e) => setCorreo(e.target.value)}
                placeholder={"Correo"}
                type={"text"}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={(e) => setTelefono(e.target.value)}
                placeholder={"Telefono"}
                type={"text"}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={(e) => setDireccion(e.target.value)}
                placeholder={"Dirección"}
                type={"text"}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={(e) => setBarrio(e.target.value)}
                placeholder={"Barrio"}
                type={"text"}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={(e) => setCiudad(e.target.value)}
                placeholder={"Ciudad"}
                type={"text"}
                className="form-control"
              />
            </div>
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

      {/*<form className="container">
        <div className="mb-3">
          <label className="form-label">
            Nombre
          </label>
          <input
            onChange={(e) => setNombre(e.target.value)}
            type={"text"}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="documento" className="form-label">
            Documento
          </label>
          <input
            onChange={(e) => setDocumento(e.target.value)}
            type={"text"}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Correo
          </label>
          <input
            onChange={(e) => setCorreo(e.target.value)}
            type={"text"}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
            Telefono
          </label>
          <input
            onChange={(e) => setTelefono(e.target.value)}
            type={"text"}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">
            Direccion
          </label>
          <input
            onChange={(e) => setDireccion(e.target.value)}
            type={"text"}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="barrio" className="form-label">
            Barrio
          </label>
          <input
            onChange={(e) => setBarrio(e.target.value)}
            type={"text"}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ciudad" className="form-label">
            Ciudad
          </label>
          <input
            onChange={(e) => setCiudad(e.target.value)}
            type={"text"}
            className="form-control"
          />
        </div>
        <label>Nombre</label>
        <input
          onChange={(e) => setNombre(e.target.value)}
          placeholder={""}
          type={"text"}
        />
  
        <button type="submit" className="btn btn-primary">
          Agregar cliente
        </button>
      </form>*/}
    </section>
  );
};

export default CrearCliente;
