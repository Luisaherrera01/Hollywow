import { collection, addDoc } from "firebase/firestore"
import { dataBase, subirImagen } from "../../config/DataBase.jsx"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"

const CrearBovedaContraseña = () => {
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [usuario, setUsuario] = useState("")
    const [imgWeb, setImgWeb] = useState(null)
    const returnListadoBovedas = useNavigate()

    const agregarBovedaContraseña = async () => {
        const urlImage = await subirImagen(imgWeb)
        const bovedaColletion = collection(dataBase, "bovedas")
        const boveda = {
            nombre,
            contraseña,
            usuario,
            urlImage
        }
        await addDoc(bovedaColletion, boveda)
        returnListadoBovedas("/listar-bovedas")
    }
    return (
        <section>
            <div><MenuAdmin /></div>
            <h1 className="title">Contraseñas</h1>
            <div className="form-container">
                <div className="form">
                    <form className="container">
                        
                        <label htmlFor="nombre">Nombre </label>
                        <div className="mb-3">
                            <input onChange={(e) => setNombre(e.target.value)} id="nombre" type={"text"} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contraseña">Contraseña </label>
                            <input onChange={(e) => setContraseña(e.target.value)} id="contraseña" type={"text"} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="usuario">Usuario </label>
                            <input onChange={(e) => setUsuario(e.target.value)} id="usuario" type={"text"} className="form-control" />
                        </div>
                        <label>Imagen </label><br />
                        <input onChange={(e) => setImgWeb(e.target.files[0])} type="file" />

                        <input className="button" onClick={agregarBovedaContraseña} type={"button"} value={"agregar boveda"} />

                    </form>
                </div>
            </div>

        </section>
    )
}

export default CrearBovedaContraseña