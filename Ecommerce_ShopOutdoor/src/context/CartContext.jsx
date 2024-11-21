import { createContext, useState} from "react";

//creamos un contexto para el carrito
const cartContext = createContext()

const CartProvider=({children}) => {

    // va a contener todos los productos del carrito
    const [cart, setCart] = useState([])

    const addProductInCart = (newProduct) =>{
        const tempCart=[...cart]

        const indexProduct = cart.findIndex( (productCart)=> productCart.id === newProduct.id )

        if(indexProduct >= 0){
          //sumar cantidades
          tempCart[indexProduct].quantity = tempCart[indexProduct].quantity + newProduct.quantity
    
          setCart(tempCart)
        }else{
          //agregar como producto nuevo
          setCart( [ ...cart, newProduct ] )
        }
      }

    //console.log(cart)

    const totalQuantity = () =>{
        const quantity = cart.reduce((total, productCart)=> total + productCart.quantity, 0)
        return quantity
    }

    const totalAmount = () => {
        const amount= cart.reduce( (total, productCart)=> total + ( productCart.quantity * productCart.price.replace(/\./g, '') ), 0 )

        return amount
      }
    
    const deleteProductById = (idProduct) => {

        const productsFilter = cart.filter((productCart)=> productCart.id !== idProduct)
        setCart(productsFilter)
    }

    const deleteCart = () => {
        setCart([])
    }

    return(

        <cartContext.Provider value ={{cart, addProductInCart, totalQuantity,totalAmount,deleteProductById,deleteCart}}>
            {children}
        </cartContext.Provider>
        )
    }

export {cartContext, CartProvider}