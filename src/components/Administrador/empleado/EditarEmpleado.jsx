import { collection, updateDoc,doc,getDoc } from "firebase/firestore"
import { dataBase } from "../../config/DataBase"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditarEmpleado = () => {  
    const [nombre, setNombre] = useState("")
    const [documento, setDocumento] = useState("")
    const [correo, setCorreo] = useState("")
    const [cargo, setCargo] = useState("")
    const [salario, setSalario] = useState("")
    const [direccion, setDireccion] = useState("")
    const [numeroCuentaBancaria, setNumeroCuentaBancaria] = useState("")
    const [imagen, setImagen] = useState(null)
    const returnListadoEmpleados = useNavigate()
    const {id}= useParams()
   
    const editarEmpleado = async () => {
        const empleadoColletion = doc(dataBase, "empleados", id)
        const empleado = {
            nombre, 
            documento, 
            correo,
            cargo,
            salario,
            direccion,
            numeroCuentaBancaria,
            imagen
        }
        
        await updateDoc(empleadoColletion, empleado)
        returnListadoEmpleados("/listarEmpleado")
    };
    const empleadoActualizado = async (id) => {
        const empleado = await getDoc(doc(dataBase, "empleados", id))
        setNombre(empleado.data().nombre)
        setDocumento(empleado.data().documento)
        setCorreo(empleado.data().correo)
        setCargo(empleado.data().cargo)
        setSalario(empleado.data().salario)
        setDireccion(empleado.data().direccion)
        setNumeroCuentaBancaria(empleado.data().numeroCuentaBancaria)   
        setImagen(empleado.data().imagen)  
    }
    useEffect(() =>{
        empleadoActualizado(id)
    },[])

    return (        
        <section>
            <form>
            <input onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} />
                <input onChange={(e) => setDocumento(e.target.value)} placeholder={"Documento"} type={"text"} />
                <input onChange={(e) => setCorreo(e.target.value)} placeholder={"Correo"} type={"email"} />
                <input onChange={(e) => setCargo(e.target.value)} placeholder={"Cargo"} type={"text"} />
                <input onChange={(e) => setSalario(e.target.value)} placeholder={"Cargo"} type={"text"} />
                <input onChange={(e) => setDireccion(e.target.value)} placeholder={"Dirección"} type={"text"} />
                <input onChange={(e) => setNumeroCuentaBancaria(e.target.value)} placeholder={"Número Cuenta Bancaria"} type={"text"} />
                <input onChange={(e) => setImagen(e.target.files)} placeholder={"Imagen"} type={"file"} />

                <input onClick={editarEmpleado()} type={"button"} value={"Editar empleado"}/>
            </form>

        </section>

    )
}

export default EditarEmpleado