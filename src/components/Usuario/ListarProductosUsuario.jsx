import {collection,getDocs} from "firebase/firestore"
import { useEffect, useState } from "react"
import { dataBase } from "../config/DataBase"
import { MenuUsuario } from "../MenuUsuario"

const ListarProductosUsuario = () => {
    const[productos,setProductos]=useState([]);
  
    const mostrarProductos = async() => {
      const productosCollection = collection(dataBase,"productos");
      const data = await getDocs(productosCollection);
      
      setProductos(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    };
    useEffect(()=>{
        mostrarProductos();
      },[]); 
      console.log(productos);

      return(
        <section>
            <div><MenuUsuario /></div>
            <table className="table">
                <thead>
                    <tr className="lista">
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td scope="row">{producto.nombre}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.categoria}</td>
                            <td>{producto.cantidad}</td>
                            <td>{producto.valor}</td>
                       
                            <td>
                                <img src={producto.urlImage} alt={producto.nombre} />
                               
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>

      )
}

export default ListarProductosUsuario