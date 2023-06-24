import{collection,doc,getDocs,deleteDoc} from "firebase/firestore"
import { useEffect, useState } from "react"
import { dataBase } from "../../config/DataBase"
import { Link } from "react-router-dom"

const ListarBovedasDeContraseña = () => {
  const[bovedas,setBovedas]=useState([]);

  const mostrarBovedasDeContraseña = async() => {
    const bovedasCollection = collection(dataBase,"bovedas");
    const data = await getDocs(bovedasCollection);
    
    console.log(data.docs);
    setBovedas(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  };

  const eliminarBovedaDeContraseña = async(id)=>{
    const bovedaEliminada = doc(dataBase,"bovedas", id)
    await deleteDoc(bovedaEliminada)       
  }  
  useEffect(()=>{
    mostrarBovedasDeContraseña();
  },[]); 
  console.log(bovedas);
  
  return (
    <section>
    {bovedas.map((boveda)=>(
        <section key={boveda.id}>
            <h1>{boveda.nombre}</h1>
            <h3>{boveda.urlImg}</h3>
            <h3>{boveda.contraseña}</h3>
            <h3>{boveda.usuario}</h3>
            <img>{boveda.imgWeb}</img>
         
            <button onClick={(()=>eliminarBovedaDeContraseña(boveda.id))}>Eliminar</button>
            <Link to={"/editarBoveda/"+boveda.id}>Editar</Link>
        </section>
      ))}
    </section>
  );
};
export default ListarBovedasDeContraseña