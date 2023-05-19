import React from 'react'
import styled from 'styled-components'
import Imagen from '../assets/img/logon1.png'

const Logo = () => {
  return (
    <>
      <Img1 src={Imagen} alt="Logo"></Img1>
    </>
  )
}

const Img1 = styled.img`
  margin-top:0.5%;
  border-radius: 4px;
  padding: 5px;
  width: 90px;
  height: 90px;
  `
  ;
export default Logo