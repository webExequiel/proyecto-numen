export const TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_ONE_PRODUCT: "REMOVE_ONE_PRODUCT",
    REMOVE_ALL_PRODUCTS: "REMOVE_ALL_PRODUCTS",
    CLEAR_CART: "CLEAR_CART",
    TOTAL_AMOUNT: "TOTAL_AMOUNT",
    SET_PRODUCTS: "SET_PRODUCTS",
    SET_CART: "SET_CART"
};


export const addToCart = (id) => {
}

export const removeAllProducts = (id) => {
    return ({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
}

export const setProducts = (products) => {
    return ({ type: TYPES.SET_PRODUCTS, payload: products });
}

export const setCart = (cart) => {
    return ({ type: TYPES.SET_CART, payload: cart });
}

export const removeOneProduct = (id) => (
    { type: TYPES.REMOVE_ONE_PRODUCT, payload: id }
);

