import React from "react";
import { SendButton } from "../botonAgregarCarrito";
import ViandaCard from "../viandaCard/ViandaCard";
import styled from 'styled-components';
import { Card } from "reactstrap";


const Product = ({ data, addToCart, setModalProduct }) => {
    const { id, name, price, image } = data;

    return (
        <StyledCard>
            <ViandaCard
                image={image}
                setModalProduct={() => setModalProduct(data)}
            />
            <Title>{name}</Title>
            <Price>${price}</Price>
            <Button onClick={() => addToCart(data)}><SendButton /></Button>
        </StyledCard>
    )
};

const StyledCard = styled(Card)`
    margin: .2rem;
    padding: .2rem;
`

const Title = styled.h5`
font-family: ${props => props.theme.fonts.normalFont};
color: ${props => props.theme.colors.simpleTxt};
margin-bottom: 77px;
`;

const Price = styled.h5`
font-family: ${props => props.theme.fonts.normalFont};
color: ${props => props.theme.colors.simpleTxt};
font-weight: ${props => props.theme.fontWeigth.bold};
margin-bottom: 45px;
position: absolute;
bottom: 10px; 
`;

const Button = styled.button`
position: absolute;
bottom: 10px; 
`;
export default Product;
