import React, { useState } from 'react'
import { Button } from './styled-components/Button'

const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState(initial)

    function increment(){
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function decrement(){
        if (count > 1) setCount(count - 1);
    }

    function onAdd(){
        alert(`Agregaste ${count} productos a tu carrito`);
        setCount(initial);
    }

    return (
        <div className="itemCount">
            <div>
                <Button onClick={decrement}>-</Button>
                <p>{count}</p>
                <Button onClick={increment}>+</Button>
            </div>
            <Button primary onClick={onAdd} className="addToCart">Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount