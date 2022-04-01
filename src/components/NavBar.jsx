import CartWidget from "./CartWidget"
import { Link, NavLink } from 'react-router-dom'
import { useContext } from "react"
import { context } from '../context/CartContext'

const NavBar = () => {

    const { totalQuantityCalc } = useContext(context)

    return (
        <header>
            <div className="brand">
                <Link to="/">Beer Store</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/category/rubia" className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}>Blondes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/negra" className="nav__link">Blacks</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/roja" className="nav__link">Reds</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/trigo" className="nav__link">Wheat</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/track" className="nav__link">Seguimiento de compras</NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/cart" className="nav__link cartWidgetContainer">
                            <CartWidget className='cartWidget'/>
                            { totalQuantityCalc() > 0 && <p className="cartCounter">{ totalQuantityCalc() }</p> }
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
