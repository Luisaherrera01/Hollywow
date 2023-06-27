import {collection,getDocs} from "firebase/firestore"
import { useEffect, useState } from "react"
import { dataBase } from "../config/DataBase"
import { MenuUsuario } from "../MenuUsuario"

const ListarBovedasDeContraseñaUsuario = () => {
    const [bovedas,setBovedas] = useState([]);

    const mostrarBovedasDeContraseña = async () => {
        const bovedasCollection = collection(dataBase, "bovedas");
        const data = await getDocs(bovedasCollection);

        setBovedas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        mostrarBovedasDeContraseña();
    }, []);

    console.log(bovedas);

    return (
        <section>
            <MenuUsuario />
            {bovedas.map((boveda)=>(
                <section key={boveda.id}>
                    <h1>{boveda.nombre}</h1>
                    <h3>{boveda.usuario}</h3>
                    <h3>{boveda.contraseña}</h3>
                                
                    <section>
                        <img src= {boveda.imgWeb} alt={boveda.nombre} />
                         {boveda.imagen}
                        <img src= {boveda.urlImg} alt={boveda.nombre}/>
                        {boveda.imagen}
//Aqui se piden dos imagenes.  Abria que verificar bien.
                    </section> 

                </section>
            ))}
        </section>   
    )
}

export default ListarBovedasDeContraseñaUsuario
