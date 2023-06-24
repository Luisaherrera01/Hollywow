import{collection,doc,getDocs,deleteDoc} from "firebase/firestore"
import { useEffect, useState } from "react"
import { dataBase } from "../../config/DataBase"
import { Link } from "react-router-dom";

const ListarProductos = () => {
  const[productos,setProductos]=useState([]);

  const mostrarProductos = async() => {
    const productosCollection = collection(dataBase,"productos");
    const data = await getDocs(productosCollection);
    
    console.log(data.docs);
    setProductos(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  };

  const eliminarProducto = async(id)=>{
    const productoEliminado = doc(dataBase,"productos", id)
    await deleteDoc(productoEliminado)       
  }  
  useEffect(()=>{
    mostrarProductos();
  },[]); 
  console.log(productos);
  
  return (
    <section>
    {productos.map((producto)=>(
        <section key={producto.id}>
            <h1>{producto.nombre}</h1>
            <h3>{producto.descripcion}</h3>
            <h3>{producto.categoria}</h3>
            <h3>{producto.cantidad}</h3>
            <h3>{producto.valor}</h3>
            <img>{producto.imagen}</img>
            
            <button onClick={(()=>eliminarProducto(producto.id))}>Eliminar</button>
            <Link to={"/editarProducto/"+producto.id}>Editar</Link>
        </section>
      ))}
    </section>
  );
};

export default ListarProductos;