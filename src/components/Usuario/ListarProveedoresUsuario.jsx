import {collection,getDocs} from "firebase/firestore"
import { useEffect, useState } from "react"
import { dataBase } from "../config/DataBase"
import { MenuUsuario } from "../MenuUsuario"

const ListarProveedoresUsuario = () => {
    const[proveedores,setProveedores]=useState([]);
  
    const mostrarProveedores = async() => {
      const proveedoresCollection = collection(dataBase,"proveedores");
      const data = await getDocs(proveedoresCollection);
      
      console.log(data.docs);
      setProveedores(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    };
    useEffect(()=>{
        mostrarProveedores();
      },[]); 
      console.log(proveedores);
    
    return(
        <section>
            <MenuUsuario />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">NIT</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Nombre gerente</th> 
                        <th scope="col">Imagen gerente</th>                        
                        <th scope="col">Logo empresa</th>
                    </tr>
                </thead>
                <tbody>
                    {proveedores.map((proveedor) => (
                        <tr key={proveedor.id}>
                            <td scope="row">{proveedor.nombre}</td>
                            <td>{proveedor.direccion}</td>
                            <td>{proveedor.ciudad}</td>
                            <td>{proveedor.nit}</td>
                            <td>{proveedor.telefono}</td>
                            <td>{proveedor.nombreGerente}</td>                         
                            <td>
                                <img src={proveedor.imgGerente} alt={proveedor.nombre} />
                                {proveedor.imagen}
                            </td>
                            <td>
                            <img src={proveedor.logoEmpresa} alt={proveedor.nombre} />
                                {proveedor.imagen}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}
export default ListarProveedoresUsuario