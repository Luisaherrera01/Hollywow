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
    const proveedorEliminado = doc(dataBase,"proveedores", id)
    await deleteDoc(proveedorEliminado) ;
    
    mostrarProveedores();
  }  

  const admin = true;

  useEffect(()=>{
    mostrarProveedores();
  },[]); 
  console.log(proveedores);
  
  return (
    <section>
      <div>
      <MenuAdmin/>
      </div>
      <div className="button">
      <Link to={'/crear-proveedor'}>Crear Proveedor</Link>
      </div>
      <section>
      <table className="table">
        <thead>
          <tr className="lista">
            <th scope="col">Nombre</th>
            <th scope="col">Dirección</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Nit</th>
            <th scope="col">Telefono</th>
            <th scope="col">NombreGerente</th>
            <th scope="col">ImgGerente</th>
            <th scope="col">LogoEmpresa</th>
            {admin && <th scope="col">Acciones</th>}
          </tr>
        </thead>
        <tbody>
    {proveedores.map((proveedor)=>(
        <tr key={proveedor.id}>
           <td scope="row">{proveedor.nombre}</td>
              <td>{proveedor.direccion}</td>
              <td>{proveedor.ciudad}</td>
              <td>{proveedor.nit}</td>
              <td>{proveedor.telefono}</td>
              <td>{proveedor.nombreGerente}</td>
              <td>
                <img src={proveedor.urlImage} alt={proveedor.nombre} /></td>
              <td>
                <img src={proveedor.urlLogo} alt={proveedor.nombre} />
              </td>
              {admin && (
                <td>
                  <Link className="btn" to={'/editar-proveedor/'+proveedor.id}>Editar</Link>
                  <button className="btn" onClick={() => eliminarProveedor(proveedor.id)}>
                    Eliminar
                  </button>
                </td>
                 )}
                 </tr>
               ))}
             </tbody>
           </table>
           </section>
         </section>
       );
     };
     
export default ListarProveedores;
       
