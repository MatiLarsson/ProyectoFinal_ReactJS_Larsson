import disney from '../assets/images/disney.svg'

const Footer = () => {
    return (
        <footer>
            <img alt='disney logo' src={disney}/>
            <p>&copy; copyright 2022 Matias Larsson</p>
            <p>Todos los derechos reservados</p>
        </footer>
    )
}

export default Footer