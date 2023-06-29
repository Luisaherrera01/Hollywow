import { updateDoc, doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../config/DataBase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MenuAdmin } from "../../MenuAdmin";

const EditarEmpleado = () => {
  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [cargo, setCargo] = useState("");
  const [salario, setSalario] = useState("");
  const [direccion, setDireccion] = useState("");
  const [numeroCuentaBancaria, setNumeroCuentaBancaria] = useState("");
  const [imagen, setImagen] = useState(null);
  const returnListadoEmpleados = useNavigate();
  const { id } = useParams();

  const editarEmpleado = async () => {
    const empleadoColletion = doc(dataBase, "empleados", id);
    const empleado = {
      nombre,
      documento,
      correo,
      cargo,
      salario,
      direccion,
      numeroCuentaBancaria,
      imagen,
    };
    await updateDoc(empleadoColletion, empleado, id);
    returnListadoEmpleados("/listar-empleados");
  };

  const empleadoActualizado = async (id) => {
    const empleadoEditado = await getDoc(doc(dataBase, "empleados", id));
    setNombre(empleadoEditado.data().nombre);
    setDocumento(empleadoEditado.data().documento);
    setCorreo(empleadoEditado.data().correo);
    setCargo(empleadoEditado.data().cargo);
    setSalario(empleadoEditado.data().salario);
    setDireccion(empleadoEditado.data().direccion);
    setNumeroCuentaBancaria(empleadoEditado.data().numeroCuentaBancaria);
    setImagen(empleadoEditado.data().imagen);
  };
  useEffect(() => {
    empleadoActualizado(id);
  }, [id]);

  return (
    <section>
      <div>
        <MenuAdmin />
      </div>
      <h1 className="title">Empleados</h1>
      <div className="form-container">
        <div className="form">
          <form className="container">
            <div className="mb-3">
              <label htmlFor="nombre">Nombre </label>
              <input
                onChange={(e) => setNombre(e.target.value)}
                id="nombre"
                type={"text"}
                className="form-control"
                value={nombre}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="documento">Documento </label>
              <input
                onChange={(e) => setDocumento(e.target.value)}
                id="documento"
                type={"text"}
                className="form-control"
                value={documento}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="correo">Correo </label>
              <input
                onChange={(e) => setCorreo(e.target.value)}
                id="correo"
                type={"email"}
                className="form-control"
                value={correo}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cargo">Cargo </label>
              <input
                onChange={(e) => setCargo(e.target.value)}
                id="cargo"
                type={"text"}
                className="form-control"
                value={cargo}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="salario">Salario </label>
              <input
                onChange={(e) => setSalario(e.target.value)}
                id="salario"
                type={"text"}
                className="form-control"
                value={salario}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion">Direccion </label>
              <input
                onChange={(e) => setDireccion(e.target.value)}
                id="direccion"
                type={"text"}
                className="form-control"
                value={direccion}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="numeroCuentaBancaria">
                Numero cuenta bancaria{" "}
              </label>
              <input
                onChange={(e) => setNumeroCuentaBancaria(e.target.value)}
                id="numeroCuentaBancaria"
                type={"text"}
                className="form-control"
                value={numeroCuentaBancaria}
              />
            </div>
            <label>Foto </label>
            <br />
            <input
              onChange={(e) => setImagen(e.target.files[0])}
              type={"file"}
            />

            <input
              className="button"
              onClick={editarEmpleado}
              type={"button"}
              value={"Editar empleado"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditarEmpleado;
