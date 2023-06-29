import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dataBase } from "../../config/DataBase";
import { Link } from "react-router-dom";
import { MenuAdmin } from "../../MenuAdmin";

const ListarBovedasDeContraseña = () => {
  const [bovedas, setBovedas] = useState([]);

  const mostrarBovedasDeContraseña = async () => {
    const bovedasCollection = collection(dataBase, "bovedas");
    const data = await getDocs(bovedasCollection);

    setBovedas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const eliminarBovedaDeContraseña = async (id) => {
    const bovedaEliminada = doc(dataBase, "bovedas", id);
    await deleteDoc(bovedaEliminada);

    mostrarBovedasDeContraseña();
  };

  const admin = true;

  useEffect(() => {
    mostrarBovedasDeContraseña();
  }, []);
  console.log(bovedas);

  return (
    <section>
      <div>
        <MenuAdmin />
      </div>
      <div className="button">
        <Link to={"/crear-boveda"}>Crear Contraseña</Link>
      </div>
      <div className="card-contenedor">
        {bovedas.map((boveda) => (
          <div className="card estilo-card" key={boveda.id}>
            <div>
              <img
                className="card-img-top"
                src={boveda.urlImage}
                alt={boveda.nombre}
              />

              <div className="card-body">
                <h3 className="card-title">{boveda.nombre}</h3>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Nombre:</strong> {boveda.nombre}
                </li>
                <li className="list-group-item">
                  <strong>Contraseña:</strong> {boveda.contraseña}
                </li>
                <li className="list-group-item">
                  <strong>Usuario:</strong> {boveda.usuario}
                </li>
                <li className="list-group-item">
                  <strong>Url:</strong> {boveda.urlImage}
                </li>
              </ul>
            </div>

            <div>
              {admin && (
                <div className="card-acciones">
                  <Link className="btn" to={"/editar-boveda/" + boveda.id}>
                    Editar
                  </Link>
                  <button
                    className="btn"
                    onClick={() => eliminarBovedaDeContraseña(boveda.id)}
                  >
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ListarBovedasDeContraseña;
