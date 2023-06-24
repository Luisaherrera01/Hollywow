import { collection, addDoc } from "firebase/firestore"
import { dataBase } from "../../config/DataBase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const CrearCliente = () => {
    const [nombre, setNombre] = useState("")
    const [documento, setDocumento] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [barrio, setBarrio] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [imagen, setImagen] = useState(null)

    const returnListadoClientes = useNavigate()
    
    const agregarCliente = async () => {
        const clienteColletion = collection(dataBase, "clientes")
        left: 50%;
        const cliente = {
            nombre, 
            documento, 
            correo,
            telefono,
            direccion,
            barrio,
            ciudad,
            imagen
        }
        
        await addDoc(clienteColletion, cliente)
        returnListadoClientes("/listarCliente")

    }
    return (
        <section>
            <form>
                <input onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} />
                <input onChange={(e) => setDocumento(e.target.value)} placeholder={"Documento"} type={"text"} />
                <input onChange={(e) => setCorreo(e.target.value)} placeholder={"Correo"} type={"email"} />
                <input onChange={(e) => setTelefono(e.target.value)} placeholder={"Telefono"} type={"text"} />
                <input onChange={(e) => setDireccion(e.target.value)} placeholder={"Dirección"} type={"text"} />
                <input onChange={(e) => setBarrio(e.target.value)} placeholder={"Barrio"} type={"text"} />
                <input onChange={(e) => setCiudad(e.target.value)} placeholder={"Ciudad"} type={"text"} />
                <input onChange={(e) => setImagen(e.target.files[0])} placeholder={"Imagen"} type={"file"} />

                <input onClick={agregarCliente()} type={"button"} value={"agregar cliente"} />
            </form>
        </section>
    )
}

export default CrearCliente