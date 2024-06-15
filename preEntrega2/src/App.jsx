
import './App.css'
import Navbar from './components/navBar/navBar'
import ItemsListContainer from './components/container/itemListContainer/itemListContainer'
import ContenedorProductos from './components/container/contenedorProductos/contenedorProductos'

function App() {

  return (
    <div>
      <Navbar />
      <ItemsListContainer  greeting={'Afrodita-Tienda de Joyas'}/>
      <ContenedorProductos />

    </div>

  )
}

export default App
