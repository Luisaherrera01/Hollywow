import { collection, updateDoc,doc,getDoc } from "firebase/firestore"
import { dataBase } from "../../config/DataBase"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const EditarCliente = () => {
    const [nombre, setNombre] = useState("")
    const [documento, setDocumento] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [barrio, setBarrio] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [imagen, setImagen] = useState(null)
    const returnListadoClientes = useNavigate()
    const {id}= useParams()
    
    const editarCliente = async () => {
        const clienteColletion = doc(dataBase, "clientes", id)
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
        
        await updateDoc(clienteColletion, cliente)
        returnListadoClientes("/listarCliente")
    };
    const clienteActualizado = async (id) => {
        const cliente = await getDoc(doc(dataBase, "clientes", id))
        setNombre(cliente.data().nombre)
        setDocumento(cliente.data().documento)
        setCorreo(cliente.data().correo)    
        setTelefono(cliente.data().telefono) 
        setDireccion(cliente.data().direccion) 
        setBarrio(cliente.data().barrio) 
        setCiudad(cliente.data().ciudad) 
        setImagen(cliente.data().imagen)   
    }
    useEffect(() =>{
        clienteActualizado(id)
    },[])

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
                <input onChange={(e) => setImagen(e.target.files[0])} placeholder={"Correo"} type={"file"} />
                
                <input onClick={editarCliente()} type={"button"} value={"Editar cliente"}/>
            </form>

        </section>

    )
}

export default EditarCliente