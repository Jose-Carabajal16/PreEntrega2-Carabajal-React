import { useEffect, useState } from "react";
import { pedirProductos } from "../../helpers/pedirProductos";
import Item from "../item/item";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    pedirProductos()
      .then((res) => {
        if (categoryId) {
          setProductos(res.filter((produ) => produ.categoria === categoryId));
        } else {
          setProductos(res);
        }
      });
  }, [categoryId]);

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
