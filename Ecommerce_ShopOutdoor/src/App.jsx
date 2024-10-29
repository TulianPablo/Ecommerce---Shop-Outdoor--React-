//Definición del componente App.jsx.

import './App.css'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
      <div className="app-container">
        <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={ <ItemListContainer /> } />
          <Route path="/detail/:idProduct" element={ <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
      </div>
      
  )
}

export default App
