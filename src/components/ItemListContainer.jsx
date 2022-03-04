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

  const [categories, setCategories] = useState([])


  useEffect(() => {
    API_data()
    .then((categories) => {
      setCategories(categories)
      })
  }, [])


  return (
    <>
      <div className="itemListContainer">
        <h2 className="greeting">{greeting}</h2>
        <img className="landingImage" alt="landing banner" src={landing}/>
        { categories.map(category => <ItemList key={category.indexOf()} category={category}/>) }
      </div>
    </>

  )
}

export default ItemListContainer