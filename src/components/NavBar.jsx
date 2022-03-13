import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <div className="brand">
                <Link to="/">Beer Store</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/category/rubia" className="nav__link">Blondes</Link>
                    </li>
                    <li>
                        <Link to="/category/negra" className="nav__link">Blacks</Link>
                    </li>
                    <li>
                        <Link to="/category/roja" className="nav__link">Reds</Link>
                    </li>
                    <li>
                        <Link to="/category/trigo" className="nav__link">Wheat</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="nav__link"><CartWidget/></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
