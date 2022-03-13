import { useState, useEffect } from 'react'
import Products from '../../resources/Products'
import ItemDetail from './ItemDetail'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'

const getItem = (id) => {
  return new Promise((res) => {
    setTimeout(() => res(Products.find(item => item.id === Number(id))), 1000)
  })
}

function ItemDetailContainer() {

  const [itemToDetail, setItemToDetail] = useState({})
  const [loading, setLoading] = useState(true)

  const {idItem} = useParams()

  useEffect(() => {
    toast.info("Loading product details...")
    getItem(idItem)
      .then((item) => {
        toast.dismiss()
        setItemToDetail(item)
      })
      .catch(() => {
        toast.error("Error while loading product details!")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [idItem])

  if (loading) {
    return <h1 className="mainContainer">Loading...</h1>
  } else {
    return (
      <div className="mainContainer">
        <h2 className="greeting">Detalle del producto</h2>
        <ItemDetail item={itemToDetail} />
      </div>
    )
  }
}

export default ItemDetailContainer