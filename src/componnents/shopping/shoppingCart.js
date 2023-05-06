import { TYPES, removeAllProducts, removeOneProduct } from "../../actions/shoppingActions";
import { useContext, useReducer } from "react";
import { shoppingInitialState, shoppingReducer } from "../../reducer/shoppingReducer";
import Product from "./producto";
import CartItem from "./cartItem";
import { ViandasContext } from "../../context/ViandasContextProvider";
import styled from 'styled-components';

const ShoppingCart = () => {
  const { cart, products } = useContext(ViandasContext);

  const total = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Title>Carrito de Compras</Title>
      <Title2>Productos</Title2>
      <div className="box grid-responsive">
        {products.items.map((product) => <Product
          key={product.id}
          data={product}
          addToCart={cart.addToCart}
        />)}
      </div>
      <SubTitle>Carrito</SubTitle>
      <div className="box">
        {cart.items.map((item, index) => <CartItem
          key={index}
          data={item}
          deleteFromCart={cart.deleteFromCart}
        />)}
      </div>
      <div> $ {total.toFixed(2)} </div>
      <div className="clear">
        <Button onClick={cart.clearCart}>Limpiar Carrito</Button>
      </div>

    </>
  );
};
const Title = styled.h1`
font-family: ${props => props.theme.fonts.titleFont};
color: ${props => props.theme.colors.importantTxt};
`;
const Title2 = styled.h1`
font-family: ${props => props.theme.fonts.titleFont};
color: ${props => props.theme.colors.simpleTitle};
`;

const SubTitle = styled.h2`
font-family: ${props => props.theme.fonts.titleFont};
color: ${props => props.theme.colors.simpleTitle};
`;

const Button = styled.button`
font-family: ${props => props.theme.fonts.normalFont};
color: white;
`;


export default ShoppingCart;
