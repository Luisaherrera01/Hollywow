import { updateDoc,doc,getDoc } from "firebase/firestore"
import { dataBase } from "../../config/DataBase"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MenuAdmin } from "../../MenuAdmin";

const EditarProducto = () => {
    
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [valor, setValor] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("")
    const [imagen, setImagen] = useState(null)
    const returnListadoProductos = useNavigate()
    const {id}= useParams()
   
    const editarProducto = async () => {
        const productoColletion = doc(dataBase, "productos", id)
        const producto = {
            nombre, 
            cantidad, 
            valor,
            descripcion,
            categoria,
            imagen
        }        
        await updateDoc(productoColletion, producto)
        returnListadoProductos("/listar-productos")
    };
    const productoActualizado = async (id) => {
        const productoEditado = await getDoc(doc(dataBase, "productos", id))
        setNombre(productoEditado.data().nombre)
        setCantidad(productoEditado.data().cantidad)
        setValor(productoEditado.data().valor)
        setDescripcion(productoEditado.data().descripcion)
        setCategoria(productoEditado.data().categoria)
        setImagen(productoEditado.data().imagen)      
    }
    useEffect(() =>{
        productoActualizado(id)
    },[id])

    return (
        <section>
             <MenuAdmin/>
            <form>
                <input onChange={(e) => setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} />                
                <input onChange={(e) => setCantidad(e.target.value)} placeholder={"Cantidad"} type={"text"} />
                <input onChange={(e) => setValor(e.target.value)} placeholder={"Valor"} type={"text"} />
                <input onChange={(e) => setDescripcion(e.target.value)} placeholder={"Descripción"} type={"text"} />
                <input onChange={(e) => setCategoria(e.target.value)} placeholder={"Categoria"} type={"text"} />
                <input onChange={(e) => setImagen(e.target.files[0])} placeholder={"Imagen"} type={"file"} />
     
                <input onClick={editarProducto()} type={"button"} value={"Editar producto"}/>
            </form>
        </section>

    )
}

export default EditarProducto