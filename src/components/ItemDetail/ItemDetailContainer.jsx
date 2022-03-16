import { useState, useEffect } from 'react'
import Products from '../../resources/Products'
import ItemDetail from './ItemDetail'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import Lottie from 'lottie-react'
import Loading from '../../assets/loading.json'

const getItem = (id) => {
  return new Promise((res) => {
    setTimeout(() => res(Products.find(item => item.id === Number(id))), 2000)
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

function ItemDetailContainer() {

  const [itemToDetail, setItemToDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const {idItem} = useParams()

  useEffect(() => {
    setLoading(true)
    getItem(idItem)
      .then((item) => {
        setItemToDetail(item)
      })
      .catch(() => {
        toast.error("Error while loading product details!")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [idItem])

  return (
    <div className="mainContainer">
        {
          loading
          ? <div className='loader'>Loading...<Lottie {...options} /></div>
          : <>
              <h2 className="greeting">Detalle del producto</h2>
              <ItemDetail item={itemToDetail} />
            </>
        }
    </div>

  )
}

export default ItemDetailContainer

