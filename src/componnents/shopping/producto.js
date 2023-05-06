import React from "react";
import { SendButton } from "../botonAgregarCarrito";



const Product = ({ data, addToCart }) => {

    const { id, name, price } = data;

    return (

        <div className="product" style={{ border: "thin solid gray", padding: "1rem" }}>

            <h4>{name}</h4>
            <h5>${price}</h5>
            <button onClick={() => addToCart(id)}><SendButton /></button>
        </div>


    )
};

export default Product;
