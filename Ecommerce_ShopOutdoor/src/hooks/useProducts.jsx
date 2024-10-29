import { useState, useEffect } from "react"
import { getProducts } from "../data/data.js"

const useProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
    getProducts()
        .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        console.log("Finalizo la promesa")
      })
  }, [])

  return {products}

}
export {useProducts}
//export default useProducts

const useProductsFilter = ({idCategory}) =>{

  const [products, setProducts] = useState([])
  //const { idCategory } = useParams()

  useEffect(() => {
    getProducts()
      .then((data) => {
        if(idCategory){
          //filtrar la data por esa categoria
          const productsFilter = data.filter( (product) => product.category === idCategory )
          setProducts(productsFilter)
        }else{
          //guardamos todos los productos
          setProducts(data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        console.log("Finalizo la promesa")
      })
  }, [idCategory])

  return {products}

}
export {useProductsFilter}