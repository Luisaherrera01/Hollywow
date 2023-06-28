import { updateDoc,doc,getDoc } from "firebase/firestore"
import { dataBase } from "../../config/DataBase"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"

const EditarBovedaContraseña = () => {
    const [nombre, setNombre] = useState("")   
    const [contraseña, setContraseña] = useState("")
    const [usuario, setUsuario] = useState("")
    const [imgWeb, setImgWeb] = useState(null)
    const returnListadoBovedas = useNavigate()
    const {id}= useParams()
    
    const editarBovedaContraseña = async () => {
        
        const bovedaColletion = doc(dataBase, "bovedas", id)
        const boveda = {
            nombre, 
            contraseña,
            usuario,
            imgWeb               
        }
        await updateDoc(bovedaColletion, boveda, id)
        returnListadoBovedas("/listar-bovedas")
    };

    const bovedaActualizada = async (id) => {
        const bovedaEditada = await getDoc(doc(dataBase, "bovedas", id))
        setNombre(bovedaEditada.data().nombre) 
        setContraseña(bovedaEditada.data().contraseña)
        setUsuario(bovedaEditada.data().usuario)
        setImgWeb(bovedaEditada.data().imgWeb)
    }
    useEffect(() =>{
        bovedaActualizada(id)
    },[id])

    return (
        <section>
            <MenuAdmin/>
            <form>
                <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"}/>
                <input value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder={"Contraseña"} type={"text"}/>
                <input value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder={"Usuario"} type={"text"}/>
                <input value={imgWeb} onChange={(e) => setImgWeb(e.target.files[0])} placeholder={"Imagen del sitio web"} type={"file"} />
                

                <input onClick={editarBovedaContraseña} type={"button"} value={"Editar boveda"}/>
            </form>
        </section>
    )
}

export default EditarBovedaContraseña

