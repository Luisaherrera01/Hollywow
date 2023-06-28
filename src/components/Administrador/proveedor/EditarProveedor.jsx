import { updateDoc,doc,getDoc } from "firebase/firestore"
import { dataBase } from "../../config/DataBase"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"

const EditarProveedor = () => {
    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [nit, setNit] = useState("")
    const [telefono, setTelefono] = useState("")
    const [nombreGerente, setNombreGerente] = useState("")
    const [imgGerente, setImgGerente] = useState("")
    const [logoEmpresa, setLogoEmpresa] = useState("")
    const returnListadoProveedores = useNavigate()
    const {id}= useParams()
  
    const editarProveedor = async () => {
        const proveedorColletion = doc(dataBase, "proveedores", id)
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
        await updateDoc(proveedorColletion, proveedor,id)
        returnListadoProveedores("/listar-proveedores")
    };

    const proveedorActualizado = async (id) => {
        const proveedor = await getDoc(doc(dataBase, "proveedores", id))
        setNombre(proveedor.data().nombre)
        setDireccion(proveedor.data().direccion)
        setCiudad(proveedor.data().ciudad)  
        setNit(proveedor.data().nit)
        setTelefono(proveedor.data().telefono)
        setNombreGerente(proveedor.data().nombreGerente) 
        setImgGerente(proveedor.data().imgGerente)
        setLogoEmpresa(proveedor.data().logoEmpresa)   
    }
    useEffect(() =>{
        proveedorActualizado(id)
    },[id])

    return ( 
        <section>
            <MenuAdmin/>
            <form>
                <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} />
                <input value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder={"Direccion"} type={"text"} />
                <input value={ciudad} onChange={(e) => setCiudad(e.target.value)} placeholder={"Ciudad"} type={"text"} />
                <input value={nit} onChange={(e) => setNit(e.target.value)} placeholder={"Nit"} type={"text"} />
                <input value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder={"Telefono"} type={"text"} />
                <input value={nombreGerente} onChange={(e) => setNombreGerente(e.target.value)} placeholder={"Nombre de Gerente"} type={"text"} />
                <input value={imgGerente} onChange={(e) => setImgGerente(e.target.value)} type={"file"}/>
                <input value={logoEmpresa} onChange={(e) => setLogoEmpresa(e.target.value)} type={"file"}/>

                <input onClick={editarProveedor} type={"button"} value={"Editar proveedor"}/>
            </form>
        </section>
    )
}

export default EditarProveedor