import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './ItemDetail/ItemDetailContainer'
import ItemListContainer from './ItemList/ItemListContainer'
import Carrito from './Cart'

const Main = () => {
  return (
    <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route path="/category/:idCategory" element={<ItemListContainer/>} />
        <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Carrito/>} />
    </Routes>
  )
}

export default Main