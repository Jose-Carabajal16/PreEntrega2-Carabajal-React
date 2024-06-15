import React from 'react';
import Item from '../item/item';

const ListaProductos = ({ productos }) => {
    console.log(productos);

    return (
        <div className="container contenido">
            <h2 className='titulo'>Productos</h2>

            <div className="cards-container">
                {productos.map((produ) => <Item producto={produ} key={produ.id}/>)}
            </div>
        </div>
    );
}

export default ListaProductos;
