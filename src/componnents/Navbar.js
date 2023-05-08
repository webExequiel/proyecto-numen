import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo />
      <Hamburg oneClik={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburg>
      <Menu isOpen={isOpen}>
        <MenuLink href='/'>Home</MenuLink>
        <MenuLink href=''>Nosotros</MenuLink>
        <MenuLink href='/productos'>Nuestros Productos</MenuLink>
        <MenuLink href=''>Contacto</MenuLink>

      </Menu>
    </Nav>
  )

}
const Nav = styled.div`
padding: 0 2rem;
display: flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
background-color: #357401;

`;
const Hamburg = styled.div`
display: none;
flex-direction:column;
cursor: pointer;

span {
  height:2px;
  width:25px;
  background-color: yellow;
  margin-bottom:4px ;
  border-radius:5px;
}
@media(max-width:760px){
  display:flex;
  flex-direction:column;
  cursor: pointer;
}

`;
const MenuLink = styled.a`
padding:1rem 2rem;
color: white;
text-decoration:none;
margin-right: 1rem;
cursor: pointer;
font-family: ${props => props.theme.fonts.titleFont};
font-size: 25px;

&:hover{
  color:yellow;
}
`;

const Menu = styled.menu`
display: flex;
justify-content: space-between;
align-items:center;
position: relative;

@media(max-width:760px){
  overflow:hidden;
  flex-direction:column;
  width:100%;
max-height:${({ isOpen }) => (isOpen ? '300px' : '0px')};
  transition:max-height 0.3s ease-in;
}
`;

export default Navbar