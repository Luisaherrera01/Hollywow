import{collection,doc,getDocs,deleteDoc} from "firebase/firestore"
import { useEffect, useState } from "react"
import { dataBase } from "../../config/DataBase"
import { Link } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"

const ListarProveedores = () => {
  const [proveedores,setProveedores] = useState([]);

  const mostrarProveedores = async() => {
    const proveedoresCollection = collection(dataBase,"proveedores");
    const data = await getDocs(proveedoresCollection);
    
    setProveedores(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  };

  const eliminarProveedor = async(id)=>{
    const proveedorEliminado = doc(dataBase,"proveedores", id);
    await deleteDoc(proveedorEliminado); 

    mostrarProveedores();      
  };

  const admin = true;

  useEffect(()=>{
    mostrarProveedores();
  },[]); 
  console.log(proveedores);
  
  return (
    <section>
      <MenuAdmin/>
      <Link to={"/crear-proveedor"}>Crear Proveedor</Link>
    {proveedores.map((proveedor)=>(
            <section key={proveedor.id}>
            <h1>{proveedor.nombre}</h1>
            <h3>{proveedor.direccion}</h3>
            <h3>{proveedor.ciudad}</h3>   
            <h3>{proveedor.nit}</h3>   
            <h3>{proveedor.telefono}</h3>
            <h3>{proveedor.nombreGerente}</h3>
            <section>   
              <img src={proveedor.urlImage} alt={proveedor.nommbre}/>   
            //no se si con este llamado me permite llamar las dos img: logo, imgGerente
            </section> 
            {admin &&(
              <section>
                <Link className="btn" to={"/editarProveedor/"+proveedor.id}>Editar</Link>
                <button className="btn" onClick={()=> eliminarProveedor(proveedor.id)}>Eliminar</button>
              </section>
            )}                  
        </section>
      ))}
    </section>
  );
};

export default ListarProveedores