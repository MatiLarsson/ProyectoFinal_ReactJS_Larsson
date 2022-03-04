import Item from "./Item"

const ItemList = ({category}) => {
  return (
    <>
        <h4>Nombre de la category</h4>
        <section className="itemList">
            { category.map(item => <Item key={item.id} item={item}/>) }
        </section>
    </>
  )
}

export default ItemList