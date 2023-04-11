import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import Home from './Home';

const App = ()=>{
 return (
    <Container>
      <Navbar/>
      <Home/>
    </Container>
  );
};
const Container = styled.div 
` 
background:#FAF9F6;
height: 100vh;`;

export default App;