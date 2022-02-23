import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <header>
            <span className="brand">
                <a href="https://es.reactjs.org/" target="blank">iStore</a>
            </span>
            <nav>
                <ul>
                    <li>
                        <a href="https://es.reactjs.org/" target="blank" className="nav--item">Products</a>
                    </li>
                    <li>
                        <a href="https://es.reactjs.org/" target="blank" className="nav--item">Login/Register</a>
                    </li>
                    <li>
                        <a href="https://es.reactjs.org/" target="blank" className="nav--item"><CartWidget/></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
