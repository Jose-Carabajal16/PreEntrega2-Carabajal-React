
import './App.css'
import Navbar from './components/navBar/navBar'
import ItemsListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'

function App() {

  return (
    <div>
      <Navbar />
      <ItemsListContainer />
      <ItemDetailContainer itemId={2} />

    </div>

  )
}

export default App
