import React from "react";

const Product = ({data, addToCart}) =>{

    const {id, name, price} = data;

    return (
        <div className= "product" style={{border: "thin solid gray", padding: "1rem"}}>
            <h4>{name}</h4>
            <h5>${price}</h5>
            <button onClick={() => addToCart(id)}>Agregar al Carrito</button>
        </div>
    )
 };

export default Product;
