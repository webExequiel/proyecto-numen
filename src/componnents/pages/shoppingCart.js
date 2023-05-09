import { useContext, useState } from "react";
import Product from "../shopping/producto";
import CartItem from "../shopping/cartItem";
import { ViandasContext } from "../../context/ViandasContextProvider";
import styled from 'styled-components';
import CustomModal from "../viandasModal/ViandaModal";

const ShoppingCart = () => {
  const { cart, products } = useContext(ViandasContext);
  const [modalProduct, setModalProduct] = useState(null)

  const total = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <CustomModal product={modalProduct} onClose={() => setModalProduct(null)} />
      <Title2>Viandas</Title2>
      <div className="box grid-responsive">
        {products.items.map((product) => <Product
          setModalProduct={setModalProduct}
          key={product.id}
          data={product}
          addToCart={cart.addToCart}
        />)}
      </div>
      <Title>Carrito de Compras</Title>
      <div className="box">
        {cart.items.map((item, index) => <CartItem
          key={index}
          data={item}
          deleteFromCart={cart.deleteFromCart}
        />)}
      </div>
      <SubTitle>Total Carrito</SubTitle>
      <div className="total"> $ {total.toFixed(2)} </div>
      <div className="clear">
        <Button onClick={cart.clearCart}>Limpiar Carrito</Button>
      </div>
    </>
  );
};
const Title = styled.h2`
font-family: ${props => props.theme.fonts.titleFont};
background: linear-gradient(#fdfc47,green);
-webkit-background-clip: text;
color: transparent; 
font-weight: ${props => props.theme.fontWeigth.bold};
margin: 25px;

`;
const Title2 = styled.h2`
font-family: ${props => props.theme.fonts.titleFont};
color: ${props => props.theme.colors.simpleTitle};
font-weight: ${props => props.theme.fontWeigth.bold};
margin: 25px;
`;

const SubTitle = styled.h2`
font-family: ${props => props.theme.fonts.titleFont};
background: linear-gradient(#fdfc47,green);
-webkit-background-clip: text;
color: transparent; 
font-weight: ${props => props.theme.fontWeigth.bold};
margin: 25px;
`;

const Button = styled.button`
font-family: ${props => props.theme.fonts.normalFont};
color: white;
margin: 25px;
font-weight: 600;
height: 40px;
padding: 0 22px;
`;


export default ShoppingCart;
