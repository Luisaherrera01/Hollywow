import { collection, addDoc } from "firebase/firestore"
import { dataBase, subirImagen } from "../../config/DataBase.jsx"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"

const CrearProducto = () => {
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [valor, setValor] = useState("")
    const [imagen, setImagen] = useState(null)
    const returnListadoProductos = useNavigate()
    
    const agregarProducto = async () => {
        const urlImage= await subirImagen(imagen)
        const productoColletion = collection(dataBase, "productos")
        const producto = {
            nombre, 
            descripcion, 
            categoria,
            cantidad,
            valor,
            imagen
        }        
        await addDoc(productoColletion, producto)
        returnListadoProductos("/listar-productos")
    }
    return (
        <section>
            <MenuAdmin/>
            <form>
                <input onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} />                
                <input onChange={(e) => setDescripcion(e.target.value)} placeholder={"Descripcion"} type={"text"} />
                <input onChange={(e) => setCategoria(e.target.value)} placeholder={"Categoria"} type={"text"} />
                <input onChange={(e) => setCantidad(e.target.value)} placeholder={"Cantidad"} type={"text"} />
                <input onChange={(e) => setValor(e.target.value)} placeholder={"Valor"} type={"text"} />
                <input onChange={(e) => setImagen(e.target.files[0])} type={"file"}/>

                <input onClick={agregarProducto} type={"button"} value={"agregar producto"}/>
            </form>
        </section>
    )
}

export default CrearProducto