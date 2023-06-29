import { collection, addDoc } from "firebase/firestore"
import { dataBase, subirImagen } from "../../config/DataBase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"

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
        const urlImage = await subirImagen(imgGerente, logoEmpresa)
        const urlImgGerente = await subirImagen(imgGerente)
        const proveedorColletion = collection(dataBase, "proveedores")
        const proveedor = {
            nombre,
            direccion,
            ciudad,
            nit,
            telefono,
            nombreGerente,
            urlImage,
            urlImgGerente,
            logoEmpresa
        }
        await addDoc(proveedorColletion, proveedor)
        returnListadoProveedores("/listar-proveedores")
    }
    return (
        <section>
            <div>
                <MenuAdmin />
            </div>
            <h1 className="title">Proveedores</h1>
            <div className="form-container">
                <div className="form">
                    <form className="container">
                        <div className="mb-3">
                            <label htmlFor="nombre">Nombre </label>
                            <input onChange={(e) => setNombre(e.target.value)} id="nombre" type={"text"} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion">Dirección </label>
                            <input onChange={(e) => setDireccion(e.target.value)} id="direccion" type={"text"} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ciudad">Ciudad </label>
                            <input onChange={(e) => setCiudad(e.target.value)} id="ciudad" type={"text"} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nit">Nit </label>
                            <input onChange={(e) => setNit(e.target.value)} id="nit" type={"text"} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono">Teléfono </label>
                            <input onChange={(e) => setTelefono(e.target.value)} id="telefono" type={"text"} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nombreGerente">Nombre del Gerente </label>
                            <input onChange={(e) => setNombreGerente(e.target.value)} id="nombreGerente" type={"text"} className="form-control" />
                        </div>
                        <label>Foto Gerente</label><br />
                        <input onChange={(e) => setImgGerente(e.target.files[0])} type="file" /><br/>
                        <label>Logo proveedor</label><br />
                        <input onChange={(e) => setLogoEmpresa(e.target.files[0])} type="file" />
                        <input className="button" onClick={agregarProveedor} type={"button"} value={"agregar proveedor"} />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CrearProveedor