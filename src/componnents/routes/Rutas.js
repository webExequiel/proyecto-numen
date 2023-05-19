import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../pages/Home';
import ShoppingCart from '../pages/shoppingCart';
import Login from '../pages/Login';

const Rutas = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/productos' element={<ShoppingCart />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            {/*  <Footer/> */}
        </Router>
    )
}

export default Rutas