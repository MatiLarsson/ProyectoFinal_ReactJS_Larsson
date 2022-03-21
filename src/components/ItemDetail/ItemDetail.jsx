import ItemCount from "../ItemCount"
import { toast } from 'react-toastify'
import { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { context } from '../../context/CartContext'

const ItemDetail = ({item}) => {

  const { addItem } = useContext(context)

  let navigate = useNavigate()

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
    })
    navigate('/cart')
  }

  return (
      <div className="itemDetail">
        <img src={item.imageUrl} alt={item.title}/>
        <div className="detail">
            <h2 className="detail__title">{item.title}</h2>
            <p className="detail__description">{item.description}</p>
            <p className="detail__origin">Origen: {item.origin}</p>
            <p className="detail__price">Precio: ${item.price}</p>
            <div className="detail__counter">
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
            </div>
            <p className="detail__stock">Cantidad disponible: {item.stock}</p>
        </div>
      </div>
    )
}

export default ItemDetail
