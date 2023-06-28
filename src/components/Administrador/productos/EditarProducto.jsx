import {updateDoc,doc,getDoc } from "firebase/firestore"
import { dataBase } from "../../config/DataBase"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"

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
        await updateDoc(productoColletion, producto,id)
        returnListadoProductos("/listar-productos")
    };

    const productoActualizado = async (id) => {
        const productoEditado = await getDoc(doc(dataBase, "productos", id))
        setNombre(productoEditado.data().nombre)
        setDescripcion(productoEditado.data().descripcion)
        setCategoria(productoEditado.data().categoria)
        setCantidad(productoEditado.data().cantidad)
        setValor(productoEditado.data().valor)
        setImagen(productoEditado.data().imagen)      
    }
    useEffect(() =>{
        productoActualizado(id)
    },[id])

    return (
        <section>
            <MenuAdmin/>
            <form>
                <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} />                
                <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder={"Descripcion"} type={"text"} />
                <input value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder={"Categoria"} type={"text"} />
                <input value={cantidad} onChange={(e) => setCantidad(e.target.value)} placeholder={"Cantidad"} type={"text"} />
                <input value={valor} onChange={(e) => setValor(e.target.value)} placeholder={"Valor"} type={"text"} />
                <input value={imagen} onChange={(e) => setImagen(e.target.files[0])} type={"file"}/>
     
                <input onClick={editarProducto} type={"button"} value={"Editar producto"}/>
            </form>
        </section>
    )
}

export default EditarProducto