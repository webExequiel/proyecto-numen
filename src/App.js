
import ViandaModal from './componnents/viandasModal/ViandaModal';
import ViandasContextProvider from './context/ViandasContextProvider';


function App() {
  return (
    <div /* style={{
      display: "flex",
      justufyContent: "center",
      alignItems: "center",
      height: "100vh"

    }} */>
      <ViandaModal />
    </div>
    /* <ViandasContextProvider> */

    /* agregar los componentes que queremos que sean proveidos por el contexto */

    /* </ViandasContextProvider> */

  );
}

export default App;
