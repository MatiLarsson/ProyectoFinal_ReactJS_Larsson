import CartWidget from "./CartWidget"
/* import { Link, NavLink } from 'react-router-dom' */

const NavBar = () => {
    return (
        <header>
            <div className="brand">
                <a href="/">Beer Store</a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/categoria/rubia" className="nav__link">Blondes</a>
                    </li>
                    <li>
                        <a href="/categoria/negra" className="nav__link">Blacks</a>
                    </li>
                    <li>
                        <a href="/categoria/roja" className="nav__link">Reds</a>
                    </li>
                    <li>
                        <a href="/categoria/trigo" className="nav__link">Wheat</a>
                    </li>
                    <li>
                        <a href="/" className="nav__link">Login/Register</a>
                    </li>
                    <li>
                        <a href="/cart" className="nav__link"><CartWidget/></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
