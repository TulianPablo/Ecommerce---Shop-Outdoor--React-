//Definición del componente CardWidget
//import imgCarrito from "../../assets/imagenes/img-carrito.png";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import imgCarrito from "/img/shopping-cart.png";
import { Link } from "react-router-dom";


import "./cartWidget.css" 

const CartWidget = () => {

  const {totalQuantity} = useContext(cartContext)

  const total = totalQuantity()
    return (
      <Link to= "/cart" className= "cartwidget">
      <div className="cart-widget">
          <img src={imgCarrito} alt="imagen Carrito" className="cart-img"/>
          <p className="cart-quantity">{total >=1 && total}</p>
      </div>
      </Link>
    )
  }
  
  export default CartWidget