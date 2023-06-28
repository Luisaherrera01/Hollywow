import { collection, addDoc } from "firebase/firestore"
import { dataBase, subirImagenBoveda} from "../../config/DataBase.jsx"
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
        const urlImage = await subirImagenBoveda(imgWeb)
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
            <MenuAdmin/>
            <form>
                <input onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} />
                <input onChange={(e) => setContraseña(e.target.value)} placeholder={"Contraseña"} type={"text"} />
                <input onChange={(e) => setUsuario(e.target.value)} placeholder={"Usuario"} type={"text"} />
                <input onChange={(e) => setImgWeb(e.target.files[0])}  type="file"/>

                <input onClick={agregarBovedaContraseña} type={"button"} value={"agregar boveda"}/>
            </form>
        </section>
    )
}

export default CrearBovedaContraseña