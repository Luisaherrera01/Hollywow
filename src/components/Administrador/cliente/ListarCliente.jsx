import{collection,doc,getDocs,deleteDoc} from "firebase/firestore"
import { useEffect, useState } from "react"
import { dataBase } from "../../config/DataBase"
import { Link } from "react-router-dom";

const ListarClientes = () => {
  const[clientes, setClientes]=useState([]);

  const mostrarClientes = async() => {
    const clientesCollection = collection(dataBase,"clientes");
    const data = await getDocs(clientesCollection);
    
    console.log(data.docs);
    setClientes(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  };

  const eliminarCliente = async(id)=>{
    const clienteEliminado = doc(dataBase,"clientes", id)
    await deleteDoc(clienteEliminado)       
  }  
 
  useEffect(()=>{
    mostrarClientes();
  },[]); 
  console.log(clientes);
  
  return (
    <section>
    {clientes.map((cliente)=>(
        <section key={cliente.id}>
            <h1>{cliente.nombre}</h1>
            <h3>{cliente.documento}</h3> 
            <h3>{cliente.correo}</h3>
            <h3>{cliente.telefono}</h3>
            <h3>{cliente.direccion}</h3>
            <h3>{cliente.barrio}</h3>
            <h3>{cliente.ciudad}</h3>
            <img>{cliente.imagen}</img>
            //Aquí falta verificar como poner la imagen//
                             
            <button onClick={(()=>eliminarCliente(cliente.id))}>Eliminar</button>
            <Link to={"/editarCliente/"+cliente.id}>Editar</Link>
        </section>
      ))}
    </section>
  );
};

export default ListarClientes;