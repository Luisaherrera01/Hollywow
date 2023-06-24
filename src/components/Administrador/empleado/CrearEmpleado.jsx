import { collection, addDoc } from "firebase/firestore"
import { dataBase } from "../../config/DataBase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CrearEmpleado = () => {
    const [nombre, setNombre] = useState("")
    const [documento, setDocumento] = useState("")
    const [correo, setCorreo] = useState("")
    const [cargo, setCargo] = useState("")
    const [salario, setSalario] = useState("")
    const [direccion, setDireccion] = useState("")
    const [numeroCuentaBancaria, setNumeroCuentaBancaria] = useState("")
    const [imagen, setImagen] = useState(null)

    const returnListadoEmpleados = useNavigate()
    
    const agregarEmpleado = async () => {
        const empleadoColletion = collection(dataBase, "empleados")
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
        
        await addDoc(empleadoColletion, empleado)
        returnListadoEmpleados("/listarEmpleado")

    }
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
                <input onChange={(e) => setImagen(e.target.files[0])} placeholder={"Imagen"} type={"file"} />

                <input onClick={agregarEmpleado()} type={"button"} value={"agregar empleado"} />
            </form>
        </section>

    )
}

export default CrearEmpleado