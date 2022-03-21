import { Link } from "react-router-dom"
import ItemCount from "../ItemCount"
import { toast } from 'react-toastify'
import { useContext } from "react"
import { context } from '../../context/CartContext'

const Item = ({item}) => {

  const { addItem } = useContext(context)

  function onAdd(count){
    addItem(item, count)
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
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
        <Link className="goToDetail" to={`/item/${item.id}`}>Ver detalle</Link>
    </article>
  )
}

export default Item