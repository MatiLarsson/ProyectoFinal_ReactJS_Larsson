import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'

const App = () => {

    const saludo = "Welcome!"

    return (
        <>
            <NavBar/>
            <ItemListContainer greeting={saludo}/>
            <Footer/>
        </>
    )
}

export default App
