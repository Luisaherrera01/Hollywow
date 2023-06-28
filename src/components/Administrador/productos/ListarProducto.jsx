import{collection,doc,getDocs,deleteDoc} from "firebase/firestore"
import { useEffect, useState } from "react"
import { dataBase } from "../../config/DataBase"
import { Link } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"


const ListarProductos = () => {
  const [productos,setProductos] = useState([]);

  const mostrarProductos = async() => {
    const productosCollection = collection(dataBase,"productos");
    const data = await getDocs(productosCollection);
    
    setProductos(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  };

  const eliminarProducto = async(id)=>{
    const productoEliminado = doc(dataBase,"productos", id)
    await deleteDoc(productoEliminado);  
    
    mostrarProductos();
  };
  
  const admin = true;

  useEffect(() => {
    mostrarProductos();
  },[]); 
  console.log(productos);
  
  return (
    <section>
      <MenuAdmin />
      <Link to={'/crear-producto'}>Crear producto</Link>
    {productos.map((producto)=>(
            <section key={producto.id}>
            <h1>{producto.nombre}</h1>
            <h3>{producto.descripcion}</h3>
            <h3>{producto.categoria}</h3>
            <h3>{producto.cantidad}</h3>
            <h3>{producto.valor}</h3>
            <section>
              <img src={producto.urlImage} alt={producto.nombre}/>
            </section>
            {admin &&(
              <section>
               <Link className="btn" to={"/editarProducto/"+producto.id}>Editar</Link>
               <button className="btn" onClick={()=> eliminarProducto(producto.id)}>Eliminar</button>
              </section> 
            )}           
        </section>
      ))}
    </section>
  );
};

export default ListarProductos