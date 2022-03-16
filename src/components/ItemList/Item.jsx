import { Link } from "react-router-dom"
import ItemCount from "../ItemCount"
import { useState } from "react"
import { toast } from 'react-toastify'
import { Button } from '../styled-components/Button'

const Item = ({item}) => {

  const [countInCart, setCountInCart] = useState(0)

  function onAdd(count){
    setCountInCart(count)
    toast.success(`Agregaste ${count} pack${(count > 1) ? 's' : ''} de cerveza ${item.title} a tu carrito`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      }
    )
  }

  return (
    <article className="item">
        <Link to={`/item/${item.id}`}><img src={item.imageUrl} alt={item.title}/></Link>
        <p className="title">{item.title}</p>
        <p className="price">Pack de 6: ${item.price}</p>
        { countInCart === 0
          ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
          : <Link to='/cart'><Button primary className='addToCart'>Terminar compra</Button></Link>
        }
        <Link className="goToDetail" to={`/item/${item.id}`}>Ver detalle</Link>
    </article>
  )
}

export default Item