import { useState, useContext } from "react"
import { cartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
//import validateForm from "../../utils/validateForm.js"
//import { toast } from "react-toastify"
import "./checkout.css"

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    dni: "",
    phone: "",
    email: "",
    direction: "",
    country: ""

  })
  const [idOrder, setIdOrder] = useState(null)
  const { cart, totalAmount, deleteCart } = useContext(cartContext)

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = async(event) => {
    event.preventDefault()

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalAmount()
    }

    uploadOrder(order)
    
    //antes de subir la orden, validamos los datos del formulario
    //const response = await validateForm(dataForm)
   // if(response.status === "success"){
     // uploadOrder(order)
   // }else{
      //toast.error(response.message)
    //}
  }

  const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, "orders")
    addDoc(ordersRef, newOrder)
      .then((response) => {
        setIdOrder(response.id)
      })
      .finally(() => {
        //una vez generada la orden, vaciamos nuestro carrito
        deleteCart()
        //toast.success("orden generada correctamente!")
      })
  }

  return (
    <div className="checkout">
      {
        idOrder === null ? (
          <form onSubmit={handleSubmitForm} className="form-checkout" >
            <h2>Confirmar compra</h2>
            <h3>Complete con sus datos personales </h3>
            <div className="content-input">
              <label className="label">Nombre completo: </label>
              <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />
            </div>

            <div className="content-input">
              <label className="label">DNI: </label>
              <input type="text" name="dni" value={dataForm.dni} onChange={handleChangeInput} />
            </div>

            <div className="content-input">
              <label className="label">Telefono:</label>
              <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />
            </div>

            <div className="content-input">
              <label className="label">Email:</label>
              <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />
            </div>

            <div className="content-input">
              <label className="label">Dirección:</label>
              <input type="text" name="direction" value={dataForm.direction} onChange={handleChangeInput} />
            </div>

            <div className="content-input">
              <label className="label">Pais:</label>
              <input type="text" name="country" value={dataForm.country} onChange={handleChangeInput} />
            </div>
            
            
            <button type="submit" className="button-send-order">Confirmar Compra</button>
          </form>
        ) : (
          <div>
            <h2>Compra generada exitosamente!!</h2>
            <p>El número de la orden de la compra es: {idOrder}</p>
            <Link to="/" className="button-to-home">Volver al Catalogo</Link>
          </div>
        )
      }

    </div>
  )
}
export default Checkout