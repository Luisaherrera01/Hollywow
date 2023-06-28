import { collection,getDocs} from "firebase/firestore";
import { useEffect, useState } from "react";
import { dataBase } from "../config/DataBase"
import { MenuUsuario } from "../MenuUsuario";

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
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Documento</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Barrio</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Imagen</th>

                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td scope="row">{cliente.nombre}</td>
                            <td>{cliente.documento}</td>
                            <td>{cliente.correo}</td>
                            <td>{cliente.telefono}</td>
                            <td>{cliente.direccion}</td>
                            <td>{cliente.barrio}</td>
                            <td>{cliente.ciudad}</td>
                            <td>
                                <img src={cliente.urlImg} alt={cliente.nombre} />
                                {cliente.imagen}
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>

    )
}

export default ListarClientesUsuario