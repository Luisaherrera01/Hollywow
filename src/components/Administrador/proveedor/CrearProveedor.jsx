import { collection, addDoc } from "firebase/firestore"
import { dataBase } from "../../config/DataBase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CrearProveedor = () => {
    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [nit, setNit] = useState("")
    const [telefono, setTelefono] = useState("")
    const [nombreGerente, setNombreGerente] = useState("")
    const [imgGerente, setImgGerente] = useState(null)
    const [logoEmpresa, setLogoEmpresa] = useState(null)

    const returnListadoProveedores = useNavigate()
    
    const agregarProveedor = async () => {
        const proveedorColletion = collection(dataBase, "proveedores")
        const proveedor = {
            nombre, 
            direccion, 
            ciudad,
            nit,
            telefono,
            nombreGerente,
            imgGerente,
            logoEmpresa
        }      
        await addDoc(proveedorColletion, proveedor)
        returnListadoProveedores("/listarProveedor")
    }
    return (
        <section>
            <form>
                <input onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} />
                <input onChange={(e) => setDireccion(e.target.value)} placeholder={"Direccion"} type={"text"} />
                <input onChange={(e) => setCiudad(e.target.value)} placeholder={"Ciudad"} type={"text"} />
                <input onChange={(e) => setNit(e.target.value)} placeholder={"Nit"} type={"text"} />
                <input onChange={(e) => setTelefono(e.target.value)} placeholder={"Telefono"} type={"text"} />
                <input onChange={(e) => setNombreGerente(e.target.value)} placeholder={"Nombre de Gerente"} type={"text"} />

                <input onChange={(e) => setImgGerente(e.target.files[0])} placeholder={"Imagen"} type={"file"} />
                <input onChange={(e) => setLogoEmpresa(e.target.files[0])} placeholder={"Logo"} type={"file"} />
                <input onClick={agregarProveedor()} type={"button"} value={"agregar proveedor"} />
            </form>
        </section>
    )
}

export default CrearProveedor