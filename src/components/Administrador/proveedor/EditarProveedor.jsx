import { updateDoc, doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../config/DataBase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MenuAdmin } from "../../MenuAdmin";

const EditarProveedor = () => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [nit, setNit] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nombreGerente, setNombreGerente] = useState("");
  const [imgGerente, setImgGerente] = useState("");
  const [logoEmpresa, setLogoEmpresa] = useState("");
  const returnListadoProveedores = useNavigate();
  const { id } = useParams();

  const editarProveedor = async () => {
    const proveedorColletion = doc(dataBase, "proveedores", id);
    const proveedor = {
      nombre,
      direccion,
      ciudad,
      nit,
      telefono,
      nombreGerente,
      imgGerente,
      logoEmpresa,
    };
    await updateDoc(proveedorColletion, proveedor, id);
    returnListadoProveedores("/listar-proveedores");
  };

  const proveedorActualizado = async (id) => {
    const proveedor = await getDoc(doc(dataBase, "proveedores", id));
    setNombre(proveedor.data().nombre);
    setDireccion(proveedor.data().direccion);
    setCiudad(proveedor.data().ciudad);
    setNit(proveedor.data().nit);
    setTelefono(proveedor.data().telefono);
    setNombreGerente(proveedor.data().nombreGerente);
    setImgGerente(proveedor.data().imgGerente);
    setLogoEmpresa(proveedor.data().logoEmpresa);
  };
  useEffect(() => {
    proveedorActualizado(id);
  }, [id]);

  return (
    <section>
      <div>
        <MenuAdmin />
      </div>
      <h1 className="title">Proveedores</h1>
      <div className="form-container">
        <div className="form">
          <form className="container">
            <div className="mb-3">
              <label htmlFor="nombre">Nombre </label>
              <input
                onChange={(e) => setNombre(e.target.value)}
                id="nombre"
                type={"text"}
                className="form-control"
                value={nombre}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion">Dirección </label>
              <input
                onChange={(e) => setDireccion(e.target.value)}
                id="direccion"
                type={"text"}
                className="form-control"
                value={direccion}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ciudad">Ciudad </label>
              <input
                onChange={(e) => setCiudad(e.target.value)}
                id="ciudad"
                type={"text"}
                className="form-control"
                value={ciudad}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nit">Nit </label>
              <input
                onChange={(e) => setNit(e.target.value)}
                id="nit"
                type={"text"}
                className="form-control"
                value={nit}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono">Teléfono </label>
              <input
                onChange={(e) => setTelefono(e.target.value)}
                id="telefono"
                type={"text"}
                className="form-control"
                value={telefono}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nombreGerente">Nombre del Gerente </label>
              <input
                onChange={(e) => setNombreGerente(e.target.value)}
                id="nombreGerente"
                type={"text"}
                className="form-control"
                value={nombreGerente}
              />
            </div>
            <label>Foto Gerente</label>
            <br />
            <input
              onChange={(e) => setImgGerente(e.target.files[0])}
              type="file"
            />
            <br />
            <label>Logo proveedor</label>
            <br />
            <input
              onChange={(e) => setLogoEmpresa(e.target.files[0])}
              type="file"
            />
            <input
              className="button"
              onClick={editarProveedor}
              type={"button"}
              value={"Editar proveedor"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditarProveedor;
