import React from 'react'
import styled from 'styled-components'
import Navbar from './componnents/Navbar';
import Home from './componnents/Home';
import CarruselComidas from "./componnents/Carrusel";
import Theme from './componnents/style/Theme';
import ViandaCard from './componnents/viandaCard/ViandaCard';
import ViandasContextProvider from './context/ViandasContextProvider';

const App = () => {
  return (
    <ViandasContextProvider>
      <Theme>
        <Container>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
          }}
          >
            <ViandaCard />
          </div>

          {/*   <Navbar />
        <Home />

        <CarruselComidas /> */}
        </Container >
      </Theme>
    </ViandasContextProvider>
  );
};

const Container = styled.div` 
background:#FAF9F6;
height: 100vh;
`;

export default App;