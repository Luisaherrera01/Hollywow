import {collection,getDocs} from "firebase/firestore"
import { useEffect, useState } from "react"
import { dataBase } from "../config/DataBase"
import { MenuUsuario } from "../MenuUsuario"

const ListarEmpleadosUsuario = () => {
    const [empleados, setEmpleados] = useState([]);

    const mostrarEmpleados = async () => {
        const empleadosCollection = collection(dataBase, "empleados");
        const data = await getDocs(empleadosCollection);

        setEmpleados(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        mostrarEmpleados();
    }, []);

    console.log(empleados);

    return (
        <section>
            <MenuUsuario />
            {empleados.map((empleado)=>(
                <section key={empleado.id}>
                    <h1>{empleado.nombre}</h1>
                    <h3>{empleado.documento}</h3>
                    <h3>{empleado.correo}</h3>
                    <h3>{empleado.cargo}</h3>
                    <h3>{empleado.salario}</h3>
                    <h3>{empleado.direccion}</h3>
                    <h3>{empleado.numeroCuentaBancaria}</h3>
                        <section>
                            <img src= {empleado.imagen} alt={empleado.nombre}/>
                            {empleado.imagen}
                        </section>                                     
                </section>
             ))}
        </section>      
    )
}

export default ListarEmpleadosUsuario
