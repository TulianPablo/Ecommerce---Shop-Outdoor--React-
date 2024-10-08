//import imgCarrito from "../src/assets/imagenes/img-carrito.png"
import imgCarrito from "../../assets/imagenes/img-carrito.png";


import "./cartWidget.css" 

const CartWidget = () => {
    return (
      <div className="cart-widget">
          <img src={imgCarrito} alt="imagen Carrito" className="cart-img"/>
          <p className="cart-quantity">1</p>
      </div>
    )
  }
  
  export default CartWidget