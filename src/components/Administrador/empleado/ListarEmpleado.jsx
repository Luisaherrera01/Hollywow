import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dataBase } from "../../config/DataBase";
import { Link } from "react-router-dom";
import { MenuAdmin } from "../../MenuAdmin";

const ListarEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);

  const mostrarEmpleados = async () => {
    const empleadosCollection = collection(dataBase, "empleados");
    const data = await getDocs(empleadosCollection);

    setEmpleados(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const eliminarEmpleado = async (id) => {
    const empleadoEliminado = doc(dataBase, "empleados", id);
    await deleteDoc(empleadoEliminado);

    mostrarEmpleados();
  };

  const admin = true;

  useEffect(() => {
    mostrarEmpleados();
  }, []);
  console.log(empleados);

  return (
    <section>
      <div>
        <MenuAdmin />
      </div>
      <div className="button">
        <Link to={"/crear-empleado"}>Crear empleado</Link>
      </div>
      <div className="card-contenedor">
        {empleados.map((empleado) => (
          <div className="card estilo-card" key={empleado.id}>
            <img
              className="card-img-top"
              src={empleado.urlImage}
              alt={empleado.nombre}
            />
            <div className="card-body">
              <h3 className="card-title">{empleado.nombre}</h3>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Documento:</strong> {empleado.documento}
              </li>
              <li className="list-group-item">
                <strong>Correo:</strong> {empleado.correo}
              </li>
              <li className="list-group-item">
                <strong>Cargo:</strong> {empleado.cargo}
              </li>
              <li className="list-group-item">
                <strong>Salario:</strong> {empleado.salario}
              </li>
              <li className="list-group-item">
                <strong>Direccion:</strong> {empleado.direccion}
              </li>
              <li className="list-group-item">
                <strong>Cuenta Bancaria:</strong>{" "}
                {empleado.numeroCuentaBancaria}
              </li>
            </ul>

            <div>
              {admin && (
                <div className="card-acciones">
                  <Link className="btn" to={"/editarEmpleado/" + empleado.id}>
                    Editar
                  </Link>
                  <button
                    className="btn"
                    onClick={() => eliminarEmpleado(empleado.id)}
                  >
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListarEmpleados;
