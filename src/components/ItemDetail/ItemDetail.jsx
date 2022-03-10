import ItemCount from "../ItemCount"

const ItemDetail = ({item}) => {
  return (
      <div className="itemDetail">
        <img src={item.imageUrl} alt={item.title}/>
        <div className="detail">
            <h4 className="detail__title">{item.title}</h4>
            <h5 className="detail__description">{item.description}</h5>
            <span>{item.precio}</span>
            <div className="detail__counter">
              <ItemCount stock={item.stock} initial={(item.stock >=1 ) ? 1 : 0}/>
            </div>
            <p className="detail__stock">Cantidad disponible: {item.stock}</p>
        </div>
      </div>
    )
}

export default ItemDetail
