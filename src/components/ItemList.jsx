import Item from "./Item"

const ItemList = ({category, items}) => {
  return (
    <>
        <h4>{category}</h4>
        <section className="itemList">
            { items.map(item => <Item key={item.id} item={item}/>) }
        </section>
    </>
  )
}

export default ItemList