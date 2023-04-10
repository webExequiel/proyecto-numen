import './App.css';
import { SendButton } from './componnents/botonAgregarCarrito';
import ViandaModal from './componnents/viandasModal/ViandaModal';

function App() {
  return (
    <div className="App">
      <SendButton />
      <ViandaModal />
    </div>
    /* <ViandasContextProvider> */

    /* agregar los componentes que queremos que sean proveidos por el contexto */

    /* </ViandasContextProvider> */

  );
}

export default App;
