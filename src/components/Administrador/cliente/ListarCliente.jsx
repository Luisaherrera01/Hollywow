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
      <MenuAdmin />

      <Link to={"/crear-cliente"}>Crear cliente</Link>

      {clientes.map((cliente) => (
        <article className="card-contenedor" key={cliente.id}>
          <div>
            <img src={cliente.urlImage} alt={cliente.nombre} />
            <h3 className="card-titulo">{cliente.nombre}</h3>
            <ul className="card-contenedor">
              <li>
                <strong>Documento:</strong> {cliente.documento}
              </li>
              <li>
                <strong>Correo:</strong> {cliente.correo}
              </li>
              <li>
                <strong>Teléfono:</strong> {cliente.telefono}
              </li>
              <li>
                <strong>Dirección:</strong> {cliente.direccion}
              </li>
              <li>
                <strong>Barrio:</strong> {cliente.barrio}
              </li>
              <li>
                <strong>Ciudad:</strong> {cliente.ciudad}
              </li>
            </ul>
          </div>
          {admin && (
            <div className="card-acciones">
              <Link classNameName="btn" to={"/editar/" + cliente.id}>
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
        </article>
      ))}
    </section>
  );
};

export default ListarClientes;
