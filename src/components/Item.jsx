import ItemCount from "./ItemCount"

const Item = ({item}) => {
  return (
    <div className="item">
        <img src={item.imageUrl} alt={item.title}/>
        <p className="title">{item.title}</p>
        <p className="price">{item.price}</p>
        <ItemCount stock={item.stock} initial={(item.stock >=1 ) ? 1 : 0}/>
    </div>
  )
}

export default Item