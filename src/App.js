import React from 'react'
import styled from 'styled-components'
import Navbar from './componnents/Navbar';
import Home from './componnents/Home';
import CarruselComidas from "./componnents/Carrusel";
import ShoppingCart from './componnents/shopping/shoppingCart';
import ViandasContextProvider from './context/ViandasContextProvider';
import Theme from './componnents/style/Theme';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Theme>
      <ViandasContextProvider>
        <Container>
          <Navbar />
          <Home />
          <Title>Las Viandas Mas Sanas y Deliciosas</Title>
          <CarruselComidas />
          <ShoppingCart />
        </Container>
      </ViandasContextProvider>
    </Theme>
  );
};

const Container = styled.div` 
  background:#FAF9F6;
  height: 100vh;
`;
const Title = styled.h1`
font-family: ${props => props.theme.fonts.titleFont};
color: ${props => props.theme.colors.importantTxt};
`;

export default App;