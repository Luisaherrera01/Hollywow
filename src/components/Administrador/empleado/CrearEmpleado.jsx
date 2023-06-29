import { collection, addDoc } from "firebase/firestore"
import { dataBase, subirImagen } from "../../config/DataBase.jsx"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"

const CrearEmpleado = () => {
    const [nombre, setNombre] = useState("")
    const [documento, setDocumento] = useState("")
    const [correo, setCorreo] = useState("")
    const [cargo, setCargo] = useState("")
    const [salario, setSalario] = useState("")
    const [direccion, setDireccion] = useState("")
    const [numeroCuentaBancaria, setNumeroCuentaBancaria] = useState("")
    const [imagen, setImagen] = useState(null)
    const returnListadoEmpleados = useNavigate()

    const agregarEmpleado = async () => {
        const urlImage = await subirImagen(imagen)
        const empleadoColletion = collection(dataBase, "empleados")
        const empleado = {
            nombre,
            documento,
            correo,
            cargo,
            salario,
            direccion,
            numeroCuentaBancaria,
            urlImage
        }
        await addDoc(empleadoColletion, empleado)
        returnListadoEmpleados("/listar-empleados")
    }
    return (
        <section>
            <div><MenuAdmin /></div>
            <h1 className="title">Empleados</h1>
            <div className="form-container">
                <div className="form">
                    <form className="container">
                        <div className="mb-3">
                        <label htmlFor="nombre">Nombre </label>
                        <input onChange={(e) => setNombre(e.target.value)} id="nombre" type={"text"} className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="nombre">Nombre </label>
                        <input onChange={(e) => setDocumento(e.target.value)} id="nombre" type={"text"} className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="nombre">Nombre </label>
                        <input onChange={(e) => setCorreo(e.target.value)} id="nombre" type={"email"} className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="nombre">Nombre </label>
                        <input onChange={(e) => setCargo(e.target.value)} id="nombre" type={"text"} className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="nombre">Nombre </label>
                        <input onChange={(e) => setDireccion(e.target.value)} id="nombre" type={"text"} className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="nombre">Nombre </label>
                        <input onChange={(e) => setNumeroCuentaBancaria(e.target.value)} id="nombre" type={"text"} className="form-control" />
                        </div>
                        <label>Foto </label><br />
                        <input onChange={(e) => setImagen(e.target.files[0])} type={"file"} />

                        <input className="button" onClick={agregarEmpleado} type={"button"} value={"Agregar empleado"} />
                    </form>
                </div>
            </div>
        </section>

    )
}

export default CrearEmpleado