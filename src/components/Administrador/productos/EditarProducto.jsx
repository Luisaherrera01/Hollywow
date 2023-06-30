import {updateDoc,doc,getDoc } from "firebase/firestore"
import { dataBase } from "../../config/DataBase"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"

const EditarProducto = () => {
    
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [valor, setValor] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("")
    const [img, setImagen] = useState(null)
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
            img 
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
      <div>
        <MenuAdmin />
      </div>
      <h1 className="title">Productos</h1>
      <div className="form-container">
        <div className="form">
          <form className="container">
            <div className="mb-3">
              <label htmlFor="nombre">Nombre </label>
              <input
                onChange={(e) => setNombre(e.target.value)}
                className="form-control"
                type={"text"}
                id="nombre"
                value={nombre}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cantidad">Cantidad </label>
              <input
                onChange={(e) => setCantidad(e.target.value)}
                className="form-control"
                type={"text"}
                id="cantidad"
                value={cantidad}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor">Valor </label>
              <input
                onChange={(e) => setValor(e.target.value)}
                className="form-control"
                type={"text"}
                id="valor"
                value={valor}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion">Descripción </label>
              <input
                onChange={(e) => setDescripcion(e.target.value)}
                className="form-control"
                type={"text"}
                id="descripcion"
                value={descripcion}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="categoria">Categoria </label>
              <input
                onChange={(e) => setCategoria(e.target.value)}
                className="form-control"
                type={"text"}
                id="categoria"
                value={categoria}
              />
            </div>
                <input className="button" onClick={editarProducto} type={"button"} value={"Editar producto"}/>
            </form>
            </div>
            </div>
        </section>
    )
}

export default EditarProducto