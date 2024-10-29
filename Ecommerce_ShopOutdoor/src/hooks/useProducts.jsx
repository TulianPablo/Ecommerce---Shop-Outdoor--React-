import { useState, useEffect } from "react"
import { getProducts } from "../data/data.js"

//Retorna todos los productos
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

//Retorna los productos filtrados por categoria
const useProductsFilter = ({idCategory}) =>{

  const [products, setProducts] = useState([])

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