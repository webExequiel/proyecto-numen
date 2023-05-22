import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../pages/Home';
import ShoppingCart from '../pages/shoppingCart';


const Rutas = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/productos' element={<ShoppingCart />} />
            </Routes>
        </Router>
    )
}

export default Rutas