import { useState, useEffect} from 'react'
import ItemList from "./ItemList"
import Products from '../../resources/Products'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'

const saludo = "The one and only online beer store | Homer's choice |  From the brewer to your fridge with a click"

const getItems = (id) => {
  return new Promise((res) => {
    setTimeout(() => res(id ? Products.filter(item => item.category === id) : Products), 1000)
  })
}

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const {idCategory} = useParams()

  useEffect(() => {
    toast.info("Loading products...")
    getItems(idCategory)
    .then((items) => {
      toast.dismiss()
      setItems(items)
      })
    .catch(() => {
      toast.error("Error while loading products!")
    })
    .finally(() => {
      setLoading(false)
    })
  }, [idCategory])

  if (loading) {
    return <h1 className="mainContainer">Loading...</h1>
  } else {
    return (
      <div className="mainContainer">
        <h2 className="greeting">{saludo}</h2>
        <img className="landingImage" alt="landing banner" src="/assets/images/landing.jpg"/>
        <ItemList items={items}/>
      </div>
    )
  }
}

export default ItemListContainer