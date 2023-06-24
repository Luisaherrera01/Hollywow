import{collection,doc,getDocs,deleteDoc} from "firebase/firestore"
import { useEffect, useState } from "react"
import { dataBase } from "../../config/DataBase"
import { Link } from "react-router-dom";

const ListarEmpleados = () => {
  const[empleados, setEmpleados]=useState([]);

  const mostrarEmpleados = async() => {
    const empleadosCollection = collection(dataBase,"empleados");
    const data = await getDocs(empleadosCollection);
    
    console.log(data.docs);
    setEmpleados(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  };

  const eliminarEmpleado = async(id)=>{
    const empleadoEliminado = doc(dataBase,"empleados", id)
    await deleteDoc(empleadoEliminado)       
  }  

  useEffect(()=>{
    mostrarEmpleados();
  },[]); 
  console.log(empleados);
  
  return (
    <section>
    {empleados.map((empleado)=>(
        <section key={empleado.id}>
            <h1>{empleado.nombre}</h1>
            <h3>{empleado.documento}</h3>
            <h3>{empleado.correo}</h3>
            <h3>{empleado.cargo}</h3>
            <h3>{empleado.salario}</h3>
            <h3>{empleado.direccion}</h3>
            <h3>{empleado.numeroCuentaBancaria}</h3>
            <img>{empleado.imagen}</img>
            //Aquí falta verificar como poner la imagen//

            <button onClick={(()=>eliminarEmpleado(empleado.id))}>Eliminar</button>
            <Link to={"/editarEmpleado/"+empleado.id}>Editar</Link>
        </section>
      ))}
    </section>
  );
};

export default ListarEmpleados;