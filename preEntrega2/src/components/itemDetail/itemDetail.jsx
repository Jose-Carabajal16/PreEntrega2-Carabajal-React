
const ItemDetail = ( {item} ) => {
  return (
    <div className="container-detalle">
        <div className="producto-detalle">
            <img src={item.img} alt={item.titulo} />
            <div>
                <h3 className="titulo">{item.titulo}</h3>
                <p className="detalle-descripcion">{item.descripcion}</p>
                <p className="categoria">Categoria: {item.categoria}</p>
                <p className="precio">${item.precio}</p>
            </div>
        </div>

    </div>
  )
}

export default ItemDetail