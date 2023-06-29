import { updateDoc, doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../config/DataBase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MenuAdmin } from "../../MenuAdmin";

const EditarBovedaContraseña = () => {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [usuario, setUsuario] = useState("");
  const [imgWeb, setImgWeb] = useState("");
  const returnListadoBovedas = useNavigate();
  const { id } = useParams();

  const editarBovedaContraseña = async () => {
    const bovedaColletion = doc(dataBase, "bovedas", id);
    const boveda = {
      nombre,
      contraseña,
      usuario,
      imgWeb,
    };
    await updateDoc(bovedaColletion, boveda, id);
    returnListadoBovedas("/listar-bovedas");
  };

  const bovedaActualizada = async (id) => {
    const bovedaEditada = await getDoc(doc(dataBase, "bovedas", id));
    setNombre(bovedaEditada.data().nombre);
    setContraseña(bovedaEditada.data().contraseña);
    setUsuario(bovedaEditada.data().usuario);
    setImgWeb(bovedaEditada.data().imgWeb);
  };
  useEffect(() => {
    bovedaActualizada(id);
  }, [id]);

  return (
    <section>
      <div>
        <MenuAdmin />
      </div>
      <h1 className="title">Contraseñas</h1>
      <div className="form-container">
        <div className="form">
          <form className="container">
            <label htmlFor="nombre">Nombre </label>
            <div className="mb-3">
              <input
                onChange={(e) => setNombre(e.target.value)}
                id="nombre"
                type={"text"}
                className="form-control"
                value={nombre}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contraseña">Contraseña </label>
              <input
                onChange={(e) => setContraseña(e.target.value)}
                id="contraseña"
                type={"text"}
                className="form-control"
                value={contraseña}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="usuario">Usuario </label>
              <input
                onChange={(e) => setUsuario(e.target.value)}
                id="usuario"
                type={"text"}
                className="form-control"
                value={usuario}
              />
            </div>
            <label>Imagen </label>
            <br />
            <input onChange={(e) => setImgWeb(e.target.files[0])} type="file" />

            <input
            className="button"
              onClick={editarBovedaContraseña}
              type={"button"}
              value={"Editar boveda"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditarBovedaContraseña;
