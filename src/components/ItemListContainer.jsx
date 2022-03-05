import { useState, useEffect } from 'react'
import landing from '../assets/images/boba_fett.jpg'
import ItemList from "./ItemList"
import Products from '../resources/Products'

const API_data = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(Products), 2000)
  })
}

const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])

  const itemsA = items.filter(item => item.category === 'category_A')
  const itemsB = items.filter(item => item.category === 'category_B')
  const itemsC = items.filter(item => item.category === 'category_C')
  const itemsD = items.filter(item => item.category === 'category_C')

  useEffect(() => {
    API_data()
    .then((items) => {
      setItems(items)
      })
  }, [])


  return (
    <>
      <div className="itemListContainer">
        <h2 className="greeting">{greeting}</h2>
        <img className="landingImage" alt="landing banner" src={landing}/>
        <ItemList category={'categoria A'} items={itemsA}/>
        <ItemList category={'categoria B'} items={itemsB}/>
        <ItemList category={'categoria C'} items={itemsC}/>
        <ItemList category={'categoria D'} items={itemsD}/>
      </div>
    </>

  )
}

export default ItemListContainer