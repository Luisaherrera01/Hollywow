import { collection, addDoc } from "firebase/firestore"
import { dataBase } from "../../config/DataBase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CrearBovedaContraseña = () => {
    const [nombre, setNombre] = useState("")
    const [urlImg, setUrlImg] = useState(null)
    const [contraseña, setContraseña] = useState("")
    const [usuario, setUsuario] = useState("")
    const [imgWeb, setImgWeb] = useState(null)
    const returnListadoBovedas = useNavigate()
    
    const agregarBovedaContraseña = async () => {
        const bovedaColletion = collection(dataBase, "bovedas")
        const boveda = {
            nombre, 
            urlImg,
            contraseña,
            usuario,
            imgWeb            
        }
        await addDoc(bovedaColletion, boveda)
        returnListadoBovedas("/listarBoveda")

    }
    return (
        <section>
            <form>
                <input onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} />
                <input onChange={(e) => setUrlImg(e.target.value)} placeholder={"Url de la imagen"} type={"text"} />
                <input onChange={(e) => setContraseña(e.target.value)} placeholder={"Contraseña"} type={"text"} />
                <input onChange={(e) => setUsuario(e.target.value)} placeholder={"Usuario"} type={"text"} />
                <input onChange={(e) => setImgWeb(e.target.files[0])} placeholder={"Imagen del sitio web"} type={"file"} />

                <input onClick={agregarBovedaContraseña()} type={"button"} value={"agregar boveda"} />
            </form>
        </section>
    )
}

export default CrearBovedaContraseña