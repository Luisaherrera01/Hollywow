import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dataBase } from "../../config/DataBase";
import { Link } from "react-router-dom";
import { MenuAdmin } from "../../MenuAdmin";

const ListarClientes = () => {
  const [clientes, setClientes] = useState([]);

  const mostrarClientes = async () => {
    const clientesCollection = collection(dataBase, "clientes");
    const data = await getDocs(clientesCollection);

    setClientes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const eliminarCliente = async (id) => {
    const clienteEliminado = doc(dataBase, "clientes", id);
    await deleteDoc(clienteEliminado);

    mostrarClientes();
  };

  {
    /*const editarCliente = async (id) => {
    const editarCliente = doc(dataBase, "clientes", id);
    await updateDoc(editarCliente);
  mostrarClientes();
  };*/
  }

  const admin = true;

  useEffect(() => {
    mostrarClientes();
  }, []);
  console.log(clientes);

  return (
    <section>
      <div>
        <MenuAdmin />
      </div>
      <div className="button">
        <Link to={"/crear-cliente"}>Crear cliente</Link>
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

            <div>
              {admin && (
                <div className="card-acciones">
                  <Link className="btn" to={"/editar-cliente/" + cliente.id}>
                    Editar
                  </Link>
                  <button
                    className="btn"
                    onClick={() => eliminarCliente(cliente.id)}
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

export default ListarClientes;
