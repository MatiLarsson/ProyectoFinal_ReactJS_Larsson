import { useState, useEffect} from 'react'
import ItemList from "./ItemList"
import Products from '../../resources/Products'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import Lottie from 'lottie-react'
import Loading from '../../assets/loading.json'

const saludo = "The one and only online beer store | Homer's choice |  From the brewer to your fridge with a click"

const getItems = (id) => {
  return new Promise((res) => {
    setTimeout(() => res(id ? Products.filter(item => item.category === id) : Products), 2000)
  })
}

const options = {
  animationData: Loading,
  autoplay: true,
  loop: false,
  style: {
    width: '20%'
  }
}

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const {idCategory} = useParams()

  useEffect(() => {
    setLoading(true)
    getItems(idCategory)
    .then((items) => {
      setItems(items)
      })
    .catch(() => {
      toast.error("Error while loading products!")
    })
    .finally(() => {
      setLoading(false)
    })
  }, [idCategory])

  return (
    <div className="mainContainer">
      {
        loading
        ? <div className='loader'>Loading...<Lottie {...options} /></div>
        : <>
            <h2 className="greeting">{saludo}</h2>
            <img className="landingImage" alt="landing banner" src="/assets/images/landing.jpg"/>
            <ItemList items={items}/>
          </>
      }
    </div>
  )
}

export default ItemListContainer