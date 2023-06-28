import { updateDoc,doc,getDoc } from "firebase/firestore"
import { dataBase } from "../../config/DataBase"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"

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
        await updateDoc(empleadoColletion, empleado,id)
        returnListadoEmpleados("/listar-empleados")
    };

    const empleadoActualizado = async (id) => {
        const empleadoEditado = await getDoc(doc(dataBase, "empleados", id))
        setNombre(empleadoEditado.data().nombre)
        setDocumento(empleadoEditado.data().documento)
        setCorreo(empleadoEditado.data().correo)
        setCargo(empleadoEditado.data().cargo)
        setSalario(empleadoEditado.data().salario)
        setDireccion(empleadoEditado.data().direccion)
        setNumeroCuentaBancaria(empleadoEditado.data().numeroCuentaBancaria)   
        setImagen(empleadoEditado.data().imagen)  
    }
    useEffect(() =>{
        empleadoActualizado(id)
    },[id])

    return (        
        <section>
            <MenuAdmin/>
            <form>
                <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} />
                <input value={documento} onChange={(e) => setDocumento(e.target.value)} placeholder={"Documento"} type={"text"} />
                <input value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder={"Correo"} type={"email"} />
                <input value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder={"Cargo"} type={"text"} />
                <input value={salario} onChange={(e) => setSalario(e.target.value)} placeholder={"Cargo"} type={"text"} />
                <input value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder={"Dirección"} type={"text"} />
                <input value={numeroCuentaBancaria} onChange={(e) => setNumeroCuentaBancaria(e.target.value)} placeholder={"Número Cuenta Bancaria"} type={"text"} />
                <input value={imagen} onChange={(e) => setImagen(e.target.value)} type={"file"}/>

                <input onClick={editarEmpleado} type={"button"} value={"Editar empleado"}/>
            </form>
        </section>
    )
}

export default EditarEmpleado