import ItemListContainer from './components/itemcontainer/ItemListContainer'
import './App.css'
import products from "./assets/ItemList.jsx"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {
  const [itemListParaRenderizar, setItemListParaRenderizar] = useState([])
  const { idCategory } = useParams()

  useEffect(() => {
    let filteredProducts = []

    switch (parseInt(idCategory)) {
      case 1:
        filteredProducts = products.filter(product => product.category === "Hombres")
        console.log(filteredProducts)
        break;
        case 2:
          filteredProducts = products.filter(product => product.category === "Mujeres")
          console.log(filteredProducts)
          break;
          case 3:
            filteredProducts = products.filter(product => product.category === "Niños")
            console.log(filteredProducts)
            break;
            default:
              filteredProducts = products
              console.log(filteredProducts)
        break;
    }
    setItemListParaRenderizar(filteredProducts)
  }, [idCategory])
  

  return(
    <>
    {itemListParaRenderizar}
      <ItemListContainer itemList={itemListParaRenderizar}/>
    </>
  )
} 

export default App
