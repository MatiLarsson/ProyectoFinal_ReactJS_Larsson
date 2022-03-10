import NavBar from './components/NavBar'
/* import Main from './components/Main' */
import ItemListContainer from './components/ItemList/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
/* import { BrowserRouter } from 'react-router-dom' */

const App = () => {

    return (
        <>
            <NavBar/>
            <ItemListContainer/>
            <ItemDetailContainer/>
            <Footer/>
            <ToastContainer/>
            {/* <BrowserRouter>
                <NavBar/>
                <Main/>
                <Footer/>
                <ToastContainer/>
            </BrowserRouter> */}
        </>
    )
}


export default App
