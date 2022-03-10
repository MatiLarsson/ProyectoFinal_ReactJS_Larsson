/* import { Link } from "react-router-dom" */
import ItemCount from "../ItemCount"

const Item = ({item}) => {
  return (
    <article className="item">
        <img src={item.imageUrl} alt={item.title}/>
        <p className="title">{item.title}</p>
        <p className="price">Pack de 6: ${item.price}</p>
        <ItemCount stock={item.stock} initial={(item.stock >=1 ) ? 1 : 0}/>
        <a className="goToDetail" href={`/product/${item.id}`}>Ver detalle</a>
    </article>
  )
}

export default Item