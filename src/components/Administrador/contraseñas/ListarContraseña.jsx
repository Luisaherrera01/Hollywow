import{collection,doc,getDocs,deleteDoc} from "firebase/firestore"
import { useEffect, useState } from "react"
import { dataBase } from "../../config/DataBase"
import { Link } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"

const ListarBovedasDeContraseña = () => {
  const[bovedas,setBovedas] = useState([]);

  const mostrarBovedasDeContraseña = async() => {
    const bovedasCollection = collection(dataBase,"bovedas");
    const data = await getDocs(bovedasCollection);
    
    setBovedas(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  };

  const eliminarBovedaDeContraseña = async(id)=>{
    const bovedaEliminada = doc(dataBase,"bovedas", id)
    await deleteDoc(bovedaEliminada)
    
    mostrarBovedasDeContraseña();
  };  

  const admin = true;

  useEffect(()=>{
    mostrarBovedasDeContraseña();
  },[]); 
  console.log(bovedas);
  
  return (
    <section>
      <MenuAdmin/>
      <Link to={"/crear-boveda"}>Crear Contraseña</Link>
    {bovedas.map((boveda)=>(
        <section key={boveda.id}>
            <h1>{boveda.nombre}</h1>            
            <h3>{boveda.contraseña}</h3>
            <h3>{boveda.usuario}</h3>
            <section>
              <img>{boveda.imgWeb}</img>
              <img>{boveda.urlImg}</img>
            </section>
            {admin &&(
              <section>
                  <Link className="btn" to={"/editarBoveda/"+boveda.id}>Editar</Link>
                  <button className="btn" onClick={()=> eliminarBovedaDeContraseña(boveda.id)}>Eliminar</button>
              </section>
            )}        
        </section>
      ))}
    </section>
  );
};
export default ListarBovedasDeContraseña