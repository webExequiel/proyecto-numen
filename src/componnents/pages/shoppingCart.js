import { useContext, useState } from "react";
import Product from "../shopping/producto";
import CartItem from "../shopping/cartItem";
import { ViandasContext } from "../../context/ViandasContextProvider";
import styled from 'styled-components';
import CustomModal from "../viandasModal/ViandaModal";

const ShoppingCart = () => {
  const { cart, products } = useContext(ViandasContext);
  const [modalImage, setModalImage] = useState(null)

  const total = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <CustomModal image={modalImage} onClose={() => setModalImage(null)} />
      <Title>Carrito de Compras</Title>
      <Title2>Productos</Title2>
      <div className="box grid-responsive">
        {products.items.map((product) => <Product
          setModalImage={setModalImage}
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
      <div className="total"> $ {total.toFixed(2)} </div>
      <div className="clear">
        <Button onClick={cart.clearCart}>Limpiar Carrito</Button>
      </div>
    </>
  );
};
const Title = styled.h1`
font-family: ${props => props.theme.fonts.titleFont};
color: ${props => props.theme.colors.importantTxt};
font-weight: ${props => props.theme.fontWeigth.bold};
margin: 20px;

`;
const Title2 = styled.h2`
font-family: ${props => props.theme.fonts.titleFont};
color: ${props => props.theme.colors.simpleTitle};
font-weight: ${props => props.theme.fontWeigth.bold};
margin: 20px;
`;

const SubTitle = styled.h2`
font-family: ${props => props.theme.fonts.titleFont};
color: ${props => props.theme.colors.simpleTitle};
font-weight: ${props => props.theme.fontWeigth.bold};
margin: 20px;
`;

const Button = styled.button`
font-family: ${props => props.theme.fonts.normalFont};
color: white;
margin: 20px;
font-weight: 600;
`;


export default ShoppingCart;
