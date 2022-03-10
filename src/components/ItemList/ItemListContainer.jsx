import { useState, useEffect} from 'react'
import ItemList from "./ItemList"
import Products from '../../resources/Products'
import { toast } from 'react-toastify'
/* import { useParams } from 'react-router-dom' */

const saludo = "The one and only online beer store | Homer's choice |  From the brewer to your fridge with a click"

const getItems = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(Products), 2000)
  })
}

const ItemListContainer = () => {

  const [items, setItems] = useState([])

  /* const {idCategory} = useParams() */

  const itemsA = items.filter(item => item.category === 'Rubia')
  const itemsB = items.filter(item => item.category === 'Negra')
  const itemsC = items.filter(item => item.category === 'Roja')
  const itemsD = items.filter(item => item.category === 'Trigo')

  useEffect(() => {
    toast.info("Loading products...")
    getItems()
    .then((items) => {
      toast.dismiss()
      setItems(items)
      })
    .catch(() => {
      toast.error("Error while loading products!")
    })
  }, [/* idCategory */])


  return (
    <div className="itemListContainer">
      <h2 className="greeting">{saludo}</h2>
      <img className="landingImage" alt="landing banner" src="./assets/images/landing.jpg"/>
      <ItemList category={'Rubias'} items={itemsA}/>
      <ItemList category={'Negras'} items={itemsB}/>
      <ItemList category={'Rojas'} items={itemsC}/>
      <ItemList category={'De trigo'} items={itemsD}/>
    </div>
  )
}

export default ItemListContainer