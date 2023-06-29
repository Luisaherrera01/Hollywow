import { updateDoc, doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../config/DataBase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MenuAdmin } from "../../MenuAdmin";

const EditarCliente = () => {
  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [barrio, setBarrio] = useState("");
  const [ciudad, setCiudad] = useState("");
  
  const returnListadoClientes = useNavigate();
  const { id } = useParams();

  const editarCliente = async () => {
    const clienteColletion = doc(dataBase, "clientes", id);
    const cliente = {
      nombre,
      documento,
      correo,
      telefono,
      direccion,
      barrio,
      ciudad
      
    }
console.log(clienteColletion)
console.log(cliente)
console.log(id)
    await updateDoc(clienteColletion, cliente, id)
    returnListadoClientes("/listar-clientes")
  }

  const clienteActualizado = async (id) => {
    const clienteEditado = await getDoc(doc(dataBase, "clientes", id));
    setNombre(clienteEditado.data().nombre);
    setDocumento(clienteEditado.data().documento);
    setCorreo(clienteEditado.data().correo);
    setTelefono(clienteEditado.data().telefono);
    setDireccion(clienteEditado.data().direccion);
    setBarrio(clienteEditado.data().barrio);
    setCiudad(clienteEditado.data().ciudad);
    setImg(clienteEditado.data().img);
  };
  useEffect(() => {
    clienteActualizado(id);
  }, [id]);

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
                type={"text"}
                className="form-control"
                id="nombre"
                value={nombre}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="documento">Documento </label>
              <input
                onChange={(e) => setDocumento(e.target.value)}
                type={"text"}
                className="form-control"
                id="documento"
                value={documento}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="correo">Correo </label>
              <input
                onChange={(e) => setCorreo(e.target.value)}
                type={"text"}
                className="form-control"
                id="correo"
                value={correo}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono">Teléfono </label>
              <input
                onChange={(e) => setTelefono(e.target.value)}
                type={"text"}
                className="form-control"
                id="telefono"
                value={telefono}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion">Dirección </label>
              <input
                onChange={(e) => setDireccion(e.target.value)}
                type={"text"}
                className="form-control"
                id="direccion"
                value={direccion}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="barrio">Barrio </label>
              <input
                onChange={(e) => setBarrio(e.target.value)}
                type={"text"}
                className="form-control"
                id="barrio"
                value={barrio}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ciudad">Ciudad </label>
              <input
                onChange={(e) => setCiudad(e.target.value)}
                type={"text"}
                className="form-control"
                id="ciudad"
                value={ciudad}
              />
            </div>

           

            <input
              className="button"
              onClick={editarCliente}
              type={"button"}
              value={"Editar cliente"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditarCliente;
