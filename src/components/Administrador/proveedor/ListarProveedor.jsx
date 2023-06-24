import{collection,doc,getDocs,deleteDoc} from "firebase/firestore"
import { useEffect, useState } from "react"
import { dataBase } from "../../config/DataBase"
import { Link } from "react-router-dom";

const ListarProveedores = () => {
  const[proveedores,setProveedores]=useState([]);

  const mostrarProveedores = async() => {
    const proveedoresCollection = collection(dataBase,"proveedores");
    const data = await getDocs(proveedoresCollection);
    
    console.log(data.docs);
    setProveedores(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  };

  const eliminarProveedor = async(id)=>{
    const proveedorEliminado = doc(dataBase,"proveedores", id)
    await deleteDoc(proveedorEliminado)       
  }  
  useEffect(()=>{
    mostrarProveedores();
  },[]); 
  console.log(proveedores);
  
  return (
    <section>
    {proveedores.map((proveedor)=>(
        <section key={proveedor.id}>
            <h1>{proveedor.nombre}</h1>
            <h3>{proveedor.direccion}</h3>
            <h3>{proveedor.ciudad}</h3>   
            <h3>{proveedor.nit}</h3>   
            <h3>{proveedor.telefono}</h3>
            <h3>{proveedor.nombreGerente}</h3>   
            <img>{proveedor.imgGerente}</img>   
            <img>{proveedor.logoEmpresa}</img>         

            <button onClick={(()=>eliminarProveedor(proveedor.id))}>Eliminar</button>
            <Link to={"/editarProveedor/"+proveedor.id}>Editar</Link>
        </section>
      ))}
    </section>
  );
};

export default ListarProveedores