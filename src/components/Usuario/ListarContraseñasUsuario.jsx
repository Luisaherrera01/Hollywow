import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dataBase } from "../config/DataBase";
import { MenuUsuario } from "../MenuUsuario";

const ListarBovedasDeContraseñaUsuario = () => {
  const [bovedas, setBovedas] = useState([]);

  const mostrarBovedasDeContraseña = async () => {
    const bovedasCollection = collection(dataBase, "bovedas");
    const data = await getDocs(bovedasCollection);

    setBovedas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    mostrarBovedasDeContraseña();
  }, []);

  console.log(bovedas);

  return (
    <section>
      <div>
        <MenuUsuario />
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListarBovedasDeContraseñaUsuario;
