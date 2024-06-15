
const Item = ( {producto} ) => {
  return (
    <div className="card">
        <img src={producto.img} alt={producto.titulo} />
        <div className="detalle">
            <h3 className="titulo-card">{producto.titulo}</h3>
            <p className="descripcion">{producto.descripcion}</p>
            <p className="precio">${producto.precio}</p>
            <button className="agregar"><a href={`/item/${producto.id} }`}>Ver Mas</a></button>
            
        </div>
        
    </div>
  )
}

export default Item