import { TYPES } from "../actions/shoppingActions";

//     const { id, name, price, image } = data;

export const shoppingInitialState = {
    cart: [],
    products: [],
};

/*
 const state = {
    cart: [],
    products: [],
};
action = { type: TYPES.SET_PRODUCTS, payload: res.datz }
*/
export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            const newItem = state.products.find(product => product.id === action.payload);

            const itemInCart = state.cart.find(item => item.id === newItem.id);

            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map((item) => item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    ),
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }]
                };
        };

        case TYPES.REMOVE_ONE_PRODUCT: {
            const itemToDelete = state.cart.find(item => item.id === action.payload);

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map((item) => item.id === itemToDelete.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                    ),
                }
                : {
                    ...state,
                    cart: state.cart.filter(item => item.id !== itemToDelete.id)
                };

        };
        case TYPES.REMOVE_ALL_PRODUCTS:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };
        case TYPES.CLEAR_CART:
            return {
                ...state,
                cart: []
            };
        case TYPES.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
}
