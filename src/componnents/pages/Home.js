import React from 'react';
import styled from 'styled-components';
import Delicioso from '../../assets/img/imagen.jpg';
import CarruselComidas from '../Carrusel';
import Footer from '../Footer';

const Home = () => {
  return (
    <>
      <Imagen src={Delicioso} alt="homeimage" />
      <CarruselComidas />
      <Footer />
    </>
  )
}
const Imagen = styled.img`
flex-direction:column;
height:100vh;
width: 100%;
object-fit:cover;
object-position:bottom;`

export default Home 
