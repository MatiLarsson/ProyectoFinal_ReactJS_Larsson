import { useState, useEffect } from 'react'
import Products from '../../resources/Products'
import ItemDetail from './ItemDetail'
import { toast } from 'react-toastify'
/* import { useParams } from 'react-router-dom' */

const getItem = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(Products[2], 2000))
  })
}

function ItemDetailContainer() {

  const [itemToDetail, setItemToDetail] = useState({})

  /* const {idItem} = useParams() */

  useEffect(() => {
    toast.info("Loading products...")
    getItem()
      .then((item) => {
        toast.dismiss()
        setItemToDetail(item)
      })
      .catch(() => {
        toast.error("Error while loading products!")
      })
  }, [/* idItem */])

  return (
    <div className="itemListContainer">
      <h2 className="greeting">Detalle del producto</h2>
      <ItemDetail item={itemToDetail} />
    </div>
  )
}

export default ItemDetailContainer