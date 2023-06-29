import {collection,getDocs} from "firebase/firestore"
import { useEffect, useState } from "react"
import { dataBase } from "../config/DataBase"
import { MenuUsuario } from "../MenuUsuario"

const ListarEmpleadosUsuario = () => {
    const [empleados, setEmpleados] = useState([]);

    const mostrarEmpleados = async () => {
        const empleadosCollection = collection(dataBase, "empleados");
        const data = await getDocs(empleadosCollection);

        setEmpleados(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        mostrarEmpleados();
    }, []);

    console.log(empleados);

    return (
        <section>
      <div>
        <MenuUsuario />
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
                <strong>Nombre:</strong> {empleado.nombre}
              </li>
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
        </div>
        ))}
      </div>
    </section>      
    )
}

export default ListarEmpleadosUsuario
