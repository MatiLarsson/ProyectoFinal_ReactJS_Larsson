export const CartItem = ({ item, removeItem }) => {
  return (
    <article className="cartItem">
        <img className='cartImage' src={item.imageUrl} alt={item.title}/>
        <p>{item.title}</p>
        <p>Pack de 6: ${item.price} x {item.count} unidad{item.count > 1 ? 'es' : ''} =</p>
        <p>${ item.price * item.count }</p>
        <button onClick={() => removeItem(item.id)}>X</button>
    </article>
  )
}
