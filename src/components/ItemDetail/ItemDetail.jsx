import ItemCount from "../ItemCount"

const ItemDetail = ({item}) => {
  return (
      <div className="itemDetail">
        <img src={item.imageUrl} alt={item.title}/>
        <div className="detail">
            <h2 className="detail__title">{item.title}</h2>
            <p className="detail__description">{item.description}</p>
            <p className="detail__origin">Origen: {item.origin}</p>
            <p className="detail__price">Precio: ${item.price}</p>
            <div className="detail__counter">
              <ItemCount stock={item.stock} initial={(item.stock >=1 ) ? 1 : 0} item={item}/>
            </div>
            <p className="detail__stock">Cantidad disponible: {item.stock}</p>
        </div>
      </div>
    )
}

export default ItemDetail
