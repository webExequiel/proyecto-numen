import React from "react";
import { SendButton } from "../botonAgregarCarrito";
import ViandaCard from "../viandaCard/ViandaCard";
import styled from 'styled-components';
import { Card } from "reactstrap";


const Product = ({ data, addToCart, setModalImage }) => {
    const { id, name, price, image } = data;

    return (
        <StyledCard>
            <ViandaCard image={image} setModalImage={setModalImage} />
            <Title>{name}</Title>
            <h5>${price}</h5>
            <button onClick={() => addToCart(id)}><SendButton /></button>
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
`;


export default Product;
