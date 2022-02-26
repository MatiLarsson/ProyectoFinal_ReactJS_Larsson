import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'

const App = () => {
    const saludo = "¡Bienvenidos a nuestra tienda de productos Apple!"
    return (
        <>
            <NavBar/>
            <ItemListContainer greeting={saludo}/>
            <Footer/>
        </>
    )
}

export default App