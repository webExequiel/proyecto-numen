import React from 'react';
import styled from 'styled-components';
import Delicioso from '../../assets/img/imagen.jpg';
import CarruselComidas from '../Carrusel';

const Home = () => {
  return (
    <>
      <Imagen src={Delicioso} alt="homeimage" />
      <CarruselComidas />
    </>
  )
}
const Imagen = styled.img`
flex-direction:column;
height: 70%;
width: 100%;
object-fit:cover;
object-position:bottom;`

export default Home 