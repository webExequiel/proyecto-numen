import React from "react";
import styled from 'styled-components';
import ViandaCard from "../viandaCard/ViandaCard";
import { Col, Row } from "reactstrap";

const images =
    [
        'burger',
        'empanadas',
        'grillados',
        'ensaladaFrutas',
        'barraCereal',
        'hamburger',
        'pasta',
        'pizzaVerde',
        'rollVegano',
        'jugos'
    ]

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
                <button onClick={() => deleteFromCart(id)}>Eliminar Uno</button>
                <button onClick={() => deleteFromCart(id, true)}>Eliminar Todos</button>
            </Col>
        </Row>
    );
};

const Title = styled.h5`
font-family: ${props => props.theme.fonts.normalFont};
`;

export default CartItem;

