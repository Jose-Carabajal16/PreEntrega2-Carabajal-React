import React, { useState, useEffect } from 'react';
import { pedirItemId } from '../../helpers/pedirProductos';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  return (
    <div className="container-detalle">
      <div className="producto-detalle">
        <img src={item.img} alt={item.titulo} />
        <div className="detalle-info">
          <h3 className="titulo">{item.titulo}</h3>
          <p className="detalle-descripcion">{item.descripcion}</p>
          <p className="categoria">Categoria: {item.categoria}</p>
          <p className="precio">${item.precio}</p>
        </div>
      </div>
    </div>
  );
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    pedirItemId(Number(id))
      .then((res) => {
        setItem(res);
      });
  }, [id]);

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
