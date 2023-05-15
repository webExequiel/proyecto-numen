import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../pages/Home';
import ShoppingCart from '../pages/shoppingCart';
import Footer from '../Footer';

const Rutas = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/productos' element={<ShoppingCart />} />
                {/* <Route path='/login'/> */}
            </Routes>
            {  /*<Footer/> */}
        </Router>
    )
}

export default Rutas