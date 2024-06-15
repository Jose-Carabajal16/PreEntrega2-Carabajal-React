import { useEffect, useState } from "react"
import { pedirProductos } from "../../../helpers/pedirDatos"
import ListaProductos from "../../listaProductos/listaProductos";

const ContenedorProductos = () => {

    const [productos, setProductos] = useState([]);
    console.log(productos)

    useEffect(() => {
        pedirProductos()
             .then((res) => {
                setProductos(res);

             })

    }, [])
    
    return(
        <div>
            <ListaProductos productos={productos} />
        </div>
    )
}
 
export default ContenedorProductos