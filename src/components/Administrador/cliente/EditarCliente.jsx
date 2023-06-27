import { updateDoc,doc,getDoc } from "firebase/firestore"
import { dataBase } from "../../config/DataBase"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"

const EditarCliente = () => {

    const [nombre, setNombre] = useState("")
    const [documento, setDocumento] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [barrio, setBarrio] = useState("")
    const [ciudad, setCiudad] = useState("")
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
            ciudad
        }
        
        await updateDoc(clienteColletion, cliente, id)
        returnListadoClientes("/listar-clientes")
    };
    
    const clienteActualizado = async (id) => {
        const clienteEditado = await getDoc(doc(dataBase, "clientes", id))
        setNombre(clienteEditado.data().nombre)
        setDocumento(clienteEditado.data().documento)
        setCorreo(clienteEditado.data().correo)    
        setTelefono(clienteEditado.data().telefono) 
        setDireccion(clienteEditado.data().direccion) 
        setBarrio(clienteEditado.data().barrio) 
        setCiudad(clienteEditado.data().ciudad) 
         
    }
    useEffect(() =>{
        clienteActualizado(id)
    },[id])

    return (
       
        <section>
            <MenuAdmin/>
            <form>
                <input value= {nombre} onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} />
                <input value= {documento} onChange={(e) => setDocumento(e.target.value)} placeholder={"Documento"} type={"text"} />
                <input value= {correo} onChange={(e) => setCorreo(e.target.value)} placeholder={"Correo"} type={"email"} />
                <input value= {telefono} onChange={(e) => setTelefono(e.target.value)} placeholder={"Telefono"} type={"text"} />
                <input value= {direccion} onChange={(e) => setDireccion(e.target.value)} placeholder={"Dirección"} type={"text"} />
                <input value= {barrio} onChange={(e) => setBarrio(e.target.value)} placeholder={"Barrio"} type={"text"} />
                <input value= {ciudad} onChange={(e) => setCiudad(e.target.value)} placeholder={"Ciudad"} type={"text"} />
                
                <input onClick={editarCliente} type={"button"} value={"Editar cliente"}/>
            </form>

        </section>

    )
}

export default EditarCliente