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
              <h1>{cliente.nombre}</h1>
              <h3>{cliente.documento}</h3>
              <h3>{cliente.correo}</h3>
              <h3>{cliente.telefono}</h3>
              <h3>{cliente.direccion}</h3>
              <h3>{cliente.barrio}</h3>
              <h3>{cliente.ciudad}</h3>
              <section>
                <img src={cliente.urlImage} alt={cliente.nombre} />            
              </section>
              {admin && (
                <section>
                  <Link className="btn" to={'/editarCliente/'+cliente.id}>Editar</Link>
                  <button className="btn" onClick={()=> eliminarCliente(cliente.id)}>Eliminar</button>
                </section>
              )}
            </section>
          ))} 
    </section>
  );
};

export default ListarClientes;
