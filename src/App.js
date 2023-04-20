import React from 'react'
import styled from 'styled-components'
import Navbar from './componnents/Navbar';
import Home from './componnents/Home';
import CarruselComidas from "./componnents/Carrusel";
import Theme from './componnents/style/Theme';

const App = () => {
  return (
    <Container>
      <Navbar />
      <Home />
      <h1>Las Viandas Mas Sanas y Deliciosas</h1>
      <CarruselComidas />
    </Container>
  );
};

const Container = styled.div` 
background:#FAF9F6;
height: 100vh;
`;

export default App;