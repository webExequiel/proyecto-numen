import React from 'react';
import Button from './Button';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
const Cart = () => {
  return (

    <Button icon={faCartShopping} />

  )
}

const Button = styled.button`
color: #008000;`

export default Cart