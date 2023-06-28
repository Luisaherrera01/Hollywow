import {collection,getDocs} from "firebase/firestore"
import { useEffect, useState } from "react"
import { dataBase } from "../config/DataBase"
import { MenuUsuario } from "../MenuUsuario"

const ListarClientesUsuario = () => {
    const [clientes, setClientes] = useState([]);

    const mostrarClientes = async () => {
        const clientesCollection = collection(dataBase, "clientes");
        const data = await getDocs(clientesCollection);

        setClientes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        mostrarClientes();
    }, []);

    console.log(clientes);

    return (
        <section>
            <MenuUsuario />
            {clientes.map((cliente) =>(
                <section key={cliente.id}>
                     <h1>{cliente.nombre}</h1>
                     <h3>{cliente.documento}</h3>
                     <h3>{cliente.correo}</h3>
                     <h3>{cliente.telefono}</h3>
                     <h3>{cliente.direccion}</h3>
                     <h3>{cliente.barrio}</h3>
                     <h3>{cliente.ciudad}</h3>                        
                        <section>
                            <img src={cliente.urlImg} alt={cliente.nombre} />
                            {cliente.imagen}
                        </section>                                                                 
                </section> 
             ))}           
        </section>
    )
}

export default ListarClientesUsuario