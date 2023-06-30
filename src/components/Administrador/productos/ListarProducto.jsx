import { collection, doc, getDocs, deleteDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { dataBase } from "../../config/DataBase"
import { Link } from "react-router-dom"
import { MenuAdmin } from "../../MenuAdmin"


const ListarProductos = () => {
  const [productos, setProductos] = useState([]);

  const mostrarProductos = async () => {
    const productosCollection = collection(dataBase, "productos");
    const data = await getDocs(productosCollection);


    console.log(data.docs);
    setProductos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const eliminarProducto = async (id) => {
    const productoEliminado = doc(dataBase, "productos", id);
    await deleteDoc(productoEliminado);

    mostrarProductos();
  };

  const admin = true;

  useEffect(() => {
    mostrarProductos();
  }, []);

  console.log(productos);

  return (
    <section>
      <div>
        <MenuAdmin />
      </div>
      <div className="button">
        <Link to={"/crear-producto"}>Crear producto</Link>
      </div>
      <section>
        <table className="table">
          <thead>
            <tr className="lista">
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Valor</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Categoria</th>
              <th scope="col">Imagen</th>
              {admin && <th scope="col">Acciones</th>}
            </tr>
          </thead>

          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td scope="row">{producto.nombre}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.valor}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.categoria}</td>
                <td>
                  <img src={producto.urlImage} alt={producto.nombre} />
                </td>
                {admin && (
                  <td className="boton">
                    <Link className="btn" to={"/editar-producto/"+producto.id}>
                      Editar
                    </Link>
                    <button
                      className="btn"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default ListarProductos