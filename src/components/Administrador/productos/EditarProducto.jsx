import { collection, updateDoc,doc,getDoc } from "firebase/firestore"
import { dataBase } from "../../config/DataBase"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditarProducto = () => {
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [valor, setValor] = useState("")
    const [imagen, setImagen] = useState(null)
    const returnListadoProductos = useNavigate()
    const {id}= useParams()
   
    const editarProducto = async () => {
        const productoColletion = doc(dataBase, "productos", id)
        const producto = {
            nombre, 
            descripcion, 
            categoria,
            cantidad,
            valor,
            imagen
        }        
        await updateDoc(productoColletion, producto)
        returnListadoProductos("/listarProducto")
    };
    const productoActualizado = async (id) => {
        const producto = await getDoc(doc(dataBase, "productos", id))
        setNombre(producto.data().nombre)
        setDescripcion(producto.data().descripcion)
        setCategoria(producto.data().categoria)
        setCantidad(producto.data().cantidad)
        setValor(producto.data().producto)
        setImagen(producto.data().imagen)      
    }
    useEffect(() =>{
        productoActualizado(id)
    },[])

    return (
        <section>
            <form>
                <input onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} />                
                <input onChange={(e) => setDescripcion(e.target.value)} placeholder={"Descripcion"} type={"text"} />
                <input onChange={(e) => setCategoria(e.target.value)} placeholder={"Categoria"} type={"text"} />
                <input onChange={(e) => setCantidad(e.target.value)} placeholder={"Cantidad"} type={"text"} />
                <input onChange={(e) => setValor(e.target.value)} placeholder={"Valor"} type={"text"} />
                <input onChange={(e) => setImagen(e.target.files[0])} placeholder={"Imagen"} type={"file"} />
     
                <input onClick={editarProducto()} type={"button"} value={"Editar producto"}/>
            </form>
        </section>

    )
}

export default EditarProducto