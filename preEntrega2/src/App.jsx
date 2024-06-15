
import './App.css'
import Navbar from './components/navBar/navBar'
import ItemsListContainer from './components/container/itemListContainer/itemListContainer'

function App() {

  return (
    <div>
      <Navbar />
      <ItemsListContainer  greeting={'Afrodita-Tienda de Joyas'}/>

    </div>

  )
}

export default App
