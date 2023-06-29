import { collection, addDoc } from "firebase/firestore"
import { dataBase, subirImagen } from "../../config/DataBase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"

const CrearProducto = () => {
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [valor, setValor] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("")
    const [img, setImg] = useState(null)

    const returnListadoProductos = useNavigate()

    const agregarProducto = async () => {
        const urlImage = await subirImagen(img)
        const productoColletion = collection(dataBase, "productos")
        const producto = {
            nombre,
            cantidad,
            valor,
            urlImage,
            descripcion,
            categoria
        }

        await addDoc(productoColletion, producto)
        returnListadoProductos("/listar-productos")
    }
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
                            <input onChange={(e) => setNombre(e.target.value)} className="form-control" type={"text"} id="nombre" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cantidad">Cantidad </label>
                            <input onChange={(e) => setCantidad(e.target.value)} className="form-control" type={"text"} id="cantidad" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="valor">Valor </label>
                            <input onChange={(e) => setValor(e.target.value)} className="form-control" type={"text"} id="valor" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descripcion">Descripción </label>
                            <input onChange={(e) => setDescripcion(e.target.value)} className="form-control" type={"text"} id="descripcion" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="categoria">Categoria </label>
                            <input onChange={(e) => setCategoria(e.target.value)} className="form-control" type={"text"} id="categoria" />
                        </div>
                        <input onChange={(e) => setImg(e.target.files[0])} type={"file"} />
                        <input className="button" onClick={agregarProducto} type={"button"} value={"Agregar producto"} />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CrearProducto