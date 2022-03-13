import { Link } from "react-router-dom"
import ItemCount from "../ItemCount"

const Item = ({item}) => {
  return (
    <article className="item">
        <Link to={`/item/${item.id}`}><img src={item.imageUrl} alt={item.title}/></Link>
        <p className="title">{item.title}</p>
        <p className="price">Pack de 6: ${item.price}</p>
        <ItemCount stock={item.stock} initial={(item.stock >=1 ) ? 1 : 0} item={item}/>
        <Link className="goToDetail" to={`/item/${item.id}`}>Ver detalle</Link>
    </article>
  )
}

export default Item