import ViandasContextProvider from './context/ViandasContextProvider';
import Rutas from './componnents/routes/Rutas';

import 'bootstrap/dist/css/bootstrap.min.css';
import Theme from './componnents/style/Theme';
import styled from 'styled-components';
const App = () => {
  return (
    <Theme>
      <ViandasContextProvider>
        <Container>
          <Rutas />
        </Container>
      </ViandasContextProvider>
    </Theme>
  );
};

const Container = styled.div` 
  background:#FAF9F6;
  height: 100vh;
`;

export default App;