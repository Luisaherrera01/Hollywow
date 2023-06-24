import { collection, addDoc } from "firebase/firestore"
import { dataBase } from "../../config/DataBase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CrearProducto = () => {
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [valor, setValor] = useState("")
    const [imagen, setImagen] = useState(null)

    const returnListadoProductos = useNavigate()
    
    const agregarProducto = async () => {
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
        returnListadoProductos("/listarProducto")

    }
    return (
        <section>
            <form>
                <input onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} />                
                <input onChange={(e) => setDescripcion(e.target.value)} placeholder={"Descripcion"} type={"text"} />
                <input onChange={(e) => setCategoria(e.target.value)} placeholder={"Categoria"} type={"text"} />
                <input onChange={(e) => setCantidad(e.target.value)} placeholder={"Cantidad"} type={"text"} />
                <input onChange={(e) => setValor(e.target.value)} placeholder={"Valor"} type={"text"} />
                <input onChange={(e) => setImagen(e.target.files[0])} placeholder={"Imagen"} type={"file"} />

                <input onClick={agregarProducto()} type={"button"} value={"agregar producto"} />
            </form>
        </section>

    )
}

export default CrearProducto