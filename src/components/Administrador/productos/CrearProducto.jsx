import { collection, addDoc } from "firebase/firestore"
import { dataBase, subirImagen } from "../../config/DataBase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"

const CrearProducto = () => {
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [valor, setValor] = useState("")
    const [imagen, setImagen] = useState(null)
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("")
    const [img, setImg] = useState(null)

    const returnListadoProductos = useNavigate()
   
    const agregarProducto = async () => {
        const urlImage= await subirImagen(img)

        const productoColletion = collection(dataBase, "productos")
        const producto = {
            nombre, 
            cantidad, 
            valor,
            urlImage
            descripcion,
            categoria,
            urlImage
        }
        
        await addDoc(productoColletion, producto)
        returnListadoProductos("/listar-productos")
    }
    return (
        <section>
            <MenuAdmin/>
            <form>
                <input onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} />                
                <input onChange={(e) => setCantidad(e.target.value)} placeholder={"cantidad"} type={"text"} />
                <input onChange={(e) => setValor(e.target.value)} placeholder={"CValor"} type={"text"} />
                <input onChange={(e) => setDescripcion(e.target.value)} placeholder={"Descripción"} type={"text"} />
                <input onChange={(e) => setCategoria(e.target.value)} placeholder={"Categoria"} type={"text"} />
                <input onChange={(e) => setImagen(e.target.files[0])} type="file"/>
                <input onChange={(e) => setImg(e.target.files[0])} placeholder={"Imagen"} type={"file"} />
                <input onClick={agregarProducto} type={"button"} value={"Agregar producto"}/>
            </form>
        </section>
    )
}

export default CrearProducto