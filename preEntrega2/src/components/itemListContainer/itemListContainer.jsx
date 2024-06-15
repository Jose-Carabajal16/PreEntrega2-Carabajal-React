import { useEffect, useState } from "react";
import { pedirProductos } from "../../helpers/pedirDatos";
import Item from "../item/item";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  console.log(productos);

  useEffect(() => {
    pedirProductos()
      .then((res) => {
        setProductos(res);
      });
  }, []);

  return (
    <div className="container contenido">
      <h2 className="titulo">Afrodita-Tienda de Joyas</h2>
      <div className="cards-container">
        {productos.map((produ) => (
          <Item producto={produ} key={produ.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
