import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dataBase } from "../config/DataBase";
import { MenuUsuario } from "../MenuUsuario";

const ListarClientesUsuario = () => {
  const [clientes, setClientes] = useState([]);

  const mostrarClientes = async () => {
    const clientesCollection = collection(dataBase, "clientes");
    const data = await getDocs(clientesCollection);

    setClientes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    mostrarClientes();
  }, []);

  console.log(clientes);

  return (
    <section>
      <div>
        <MenuUsuario />
      </div>
      <div className="card-contenedor">
        {clientes.map((cliente) => (
          <div className="card estilo-card" key={cliente.id}>
            <div>
              <img
                className="card-img-top"
                src={cliente.urlImage}
                alt={cliente.nombre}
              />
              <div className="card-body">
                <h3 className="card-title">{cliente.nombre}</h3>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Documento:</strong> {cliente.documento}
                </li>
                <li className="list-group-item">
                  <strong>Correo:</strong> {cliente.correo}
                </li>
                <li className="list-group-item">
                  <strong>Teléfono:</strong> {cliente.telefono}
                </li>
                <li className="list-group-item">
                  <strong>Dirección:</strong> {cliente.direccion}
                </li>
                <li className="list-group-item">
                  <strong>Barrio:</strong> {cliente.barrio}
                </li>
                <li className="list-group-item">
                  <strong>Ciudad:</strong> {cliente.ciudad}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListarClientesUsuario;
