import React from "react";
import styled from 'styled-components';
import ViandaCard from "../viandaCard/ViandaCard";
import { Col, Row } from "reactstrap";


const CartItem = ({ data, deleteFromCart }) => {
    const { id, name, price, quantity, image } = data;

    return (
        <Row>
            <Col xs={12} md={2} >
                <ViandaCard image={image} />
            </Col>
            <Col md={8} >
                <Title>{name}</Title>
                <h5>${price} x {quantity} = $ {price * quantity}</h5>
            </Col>
            <Col md={2} >
                <Button onClick={() => deleteFromCart(id)}>Eliminar Uno</Button>
                <Button onClick={() => deleteFromCart(id, true)}>Eliminar Todos</Button>
            </Col>
        </Row>
    );
};

const Title = styled.h5`
font-family: ${props => props.theme.fonts.normalFont};
`;
const Button = styled.button`
font-family: ${props => props.theme.fonts.normalFont};
color: white;
margin: 20px;
font-weight: 600;
`;


export default CartItem;

