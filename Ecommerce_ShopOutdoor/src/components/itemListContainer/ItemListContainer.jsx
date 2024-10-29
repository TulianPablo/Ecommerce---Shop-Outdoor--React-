//Definición del componente ItemListContainer
import ItemList from "./ItemList"
import {useProductsFilter} from "../../hooks/useProducts"
import { useParams } from "react-router-dom"
import "./itemListContainer.css"


const ItemListContainer = () => {
  const { idCategory } = useParams()


  const {products} = useProductsFilter({idCategory})
  
    return (
      <div className="itemlistcontainer">
      <ItemList products={products} />

      </div>
    )
  }
  
  export default ItemListContainer