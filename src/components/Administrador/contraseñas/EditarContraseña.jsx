import { collection, updateDoc,doc,getDoc } from "firebase/firestore"
import { dataBase } from "../../config/DataBase"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const EditarBovedaContraseña = () => {
    const [nombre, setNombre] = useState("")
    const [urlImg, setUrlImg] = useState(null)
    const [contraseña, setContraseña] = useState("")
    const [usuario, setUsuario] = useState("")
    const [imgWeb, setImgWeb] = useState(null)
    const returnListadoBovedas = useNavigate()
    const {id}= useParams()
    
    const editarBovedaContraseña = async () => {
        const bovedaColletion = doc(dataBase, "bovedas", id)
        const boveda = {
            nombre, 
            urlImg,
            contraseña,
            usuario,
            imgWeb   
        }
        await updateDoc(bovedaColletion, boveda)
        returnListadoBovedas("/listarBoveda")
    };
    const bovedaActualizada = async (id) => {
        const boveda = await getDoc(doc(dataBase, "bovedas", id))
        setNombre(boveda.data().nombre)
        setUrlImg(boveda.data().urlImg)
        setContraseña(boveda.data().contraseña)
        setUsuario(boveda.data().usuario)
        setImgWeb(boveda.data().imgWeb)
    useEffect(() =>{
        bovedaActualizada(id)
    },[])

    return (
        <section>
            <form>
            <input onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} />
                <input onChange={(e) => setUrlImg(e.target.value)} placeholder={"Url de la imagen"} type={"text"} />
                <input onChange={(e) => setContraseña(e.target.value)} placeholder={"Contraseña"} type={"text"} />
                <input onChange={(e) => setUsuario(e.target.value)} placeholder={"Usuario"} type={"text"} />
                <input onChange={(e) => setImgWeb(e.target.files[0])} placeholder={"Imagen del sitio web"} type={"file"} />

                <input onClick={editarBovedaContraseña()} type={"button"} value={"Editar boveda"}/>
            </form>
        </section>
    )
}

export default EditarBovedaContraseña