import './App.css';
import ShoppingCart from './componnents/shopping/shoppingCart';
import { SendButton } from './componnents/botonAgregarCarrito';

function App() {
  return (
    <div className="App">
      <ShoppingCart />
      <SendButton />
    </div>
  );
}

export default App;
