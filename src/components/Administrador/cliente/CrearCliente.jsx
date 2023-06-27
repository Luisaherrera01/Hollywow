import { collection, addDoc } from "firebase/firestore"
import { dataBase,subirImagen } from "../../config/DataBase.jsx"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"



const CrearCliente = () => {
    const [nombre, setNombre] = useState("")
    const [documento, setDocumento] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [barrio, setBarrio] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [img, setImg] = useState(null)

    const returnListadoClientes = useNavigate()
    
    const agregarCliente = async () => {
        const urlImage= await subirImagen(img)
        const clienteColletion = collection(dataBase, "clientes")
        const cliente = {
            nombre, 
            documento, 
            correo,
            telefono,
            direccion,
            barrio,
            ciudad,
            urlImage
        }
        
        await addDoc(clienteColletion, cliente)
        returnListadoClientes("/listar-clientes")

    }
    return (
        <section>
            <MenuAdmin/>
            <form>
                <input onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} />
                <input onChange={(e) => setDocumento(e.target.value)} placeholder={"Documento"} type={"text"} />
                <input onChange={(e) => setCorreo(e.target.value)} placeholder={"Correo"} type={"text"} />
                <input onChange={(e) => setTelefono(e.target.value)} placeholder={"Telefono"} type={"text"} />
                <input onChange={(e) => setDireccion(e.target.value)} placeholder={"Dirección"} type={"text"} />
                <input onChange={(e) => setBarrio(e.target.value)} placeholder={"Barrio"} type={"text"} />
                <input onChange={(e) => setCiudad(e.target.value)} placeholder={"Ciudad"} type={"text"} />
                <input onChange={(e) => setImg(e.target.files[0])} type="file" />

               <input onClick={agregarCliente} type={"button"} value={"agregar cliente"} />
               
            </form>
        </section>
    )
}

export default CrearCliente