import {collection,doc, getDocs,deleteDoc} from "firebase/firestore";
import { useEffect, useState } from "react";
import { dataBase } from "../../config/DataBase";
import { Link} from "react-router-dom";
import { MenuAdmin } from "../../MenuAdmin";

const ListarClientes = () => {
  /* const location = useLocation();
  const { isAdmin } = location.state; */

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

  {/*const editarCliente = async (id) => {
    const editarCliente = doc(dataBase, "clientes", id);
    await updateDoc(editarCliente);
  mostrarClientes();
  };*/}

  const admin = true;

  useEffect(() => {
    mostrarClientes();
  }, []);

  console.log(clientes);

  return (
    <section>
      <MenuAdmin />

      <Link to={'/crear-cliente'}>Crear cliente</Link>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Documento</th>
            <th scope="col">Correo</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Dirección</th>
            <th scope="col">Barrio</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Imagen</th>
            {admin && <th scope="col">Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td scope="row">{cliente.nombre}</td>
              <td>{cliente.documento}</td>
              <td>{cliente.correo}</td>
              <td>{cliente.telefono}</td>
              <td>{cliente.direccion}</td>
              <td>{cliente.barrio}</td>
              <td>{cliente.ciudad}</td>
              <td>
                <img src="" alt={cliente.nombre} />
                {cliente.imagen}
              </td>
              {admin && (
                <td>
                  <Link className="btn" to={'/editar/'+cliente.id}>Editar</Link>
                  <button className="btn" onClick={() => eliminarCliente(cliente.id)}>
                    Eliminar
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ListarClientes;
