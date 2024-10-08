
import './App.css'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {

  return (
      <div className="app-container">
        <NavBar/>
        <ItemListContainer producto = {"Producto 1"} />
        <ItemListContainer producto = {"Producto 2"} />
      </div>
      
  )
}

export default App
