import {collection,doc,getDocs,deleteDoc} from "firebase/firestore"
import { useEffect, useState } from "react"
import { dataBase } from "../../config/DataBase"
import { Link} from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"

const ListarClientes = () => {
   const [clientes, setClientes] = useState([]);

   const mostrarClientes = async() => {
    const clientesCollection = collection(dataBase, "clientes");
    const data = await getDocs(clientesCollection);

    setClientes(data.docs.map((doc)=>({ ...doc.data(),id:doc.id})));
  };

  const eliminarCliente = async (id) => {
    const clienteEliminado = doc(dataBase, "clientes", id);
    await deleteDoc(clienteEliminado);
    
    mostrarClientes();
  };

  const admin = true;

  useEffect(() => {
    mostrarClientes();
  }, []);
  console.log(clientes);

  return (
    <section>
      <MenuAdmin />
      <Link to={'/crear-cliente'}>Crear cliente</Link>
    {clientes.map((cliente) => (
            <section key={cliente.id}>
              <td scope="row">{cliente.nombre}</td>
              <td>{cliente.documento}</td>
              <td>{cliente.correo}</td>
              <td>{cliente.telefono}</td>
              <td>{cliente.direccion}</td>
              <td>{cliente.barrio}</td>
              <td>{cliente.ciudad}</td>
              <td>
                <img src={cliente.urlImage} alt={cliente.nombre} />
            
              </td>
              {admin && (
                <td>
                  <Link className="btn" to={'/editarCliente/'+cliente.id}>Editar</Link>
                  <button className="btn" onClick={()=> eliminarCliente(cliente.id)}>Eliminar</button>
                </td>
              )}
            </section>
          ))} 
    </section>
  );
};

export default ListarClientes;
