//Definición del componente App.jsx.

import './App.css'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
      <div className="app-container">
        <BrowserRouter>
        <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={ <ItemListContainer /> } />
          <Route path="/detail/:idProduct" element={ <ItemDetailContainer /> } />
          <Route path="/cart" element={<Cart/>}/>
          <Route path= "Checkout" element = {<Checkout/>}/>

        </Routes>
        </CartProvider>
      </BrowserRouter>
      </div>
      
  )
}

export default App
