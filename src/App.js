import React from 'react'
import styled from 'styled-components'
import Navbar from './componnents/Navbar';
import Home from './componnents/Home';
import CarruselComidas from "./componnents/Carrusel";
import Theme from './componnents/style/Theme';

const App = () => {
  return (
    <Theme>
      <Container>
        <Navbar />
        <Home />
        <h1>Carrusel</h1>
        <CarruselComidas />
      </Container>
    </Theme>
  );
};

const Container = styled.div` 
background:#FAF9F6;
height: 100vh;
`;

export default App;