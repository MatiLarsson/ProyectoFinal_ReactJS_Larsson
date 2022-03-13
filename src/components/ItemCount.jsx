import { useState } from 'react'
import { Button } from './styled-components/Button'
import { toast } from 'react-toastify'

const ItemCount = ({stock, initial, item}) => {

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
        toast.success(`Agregaste ${count} pack${(count > 1) ? 's' : ''} de cerveza ${item.title} a tu carrito`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
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