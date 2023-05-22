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
            const { itemInCart, itemToAdd } = action.payload;

            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map((item) => item.id === itemToAdd.id
                        ? itemToAdd
                        : item
                    ),
                }
                : {
                    ...state,
                    cart: [...state.cart, itemToAdd]
                };
        };
        case TYPES.REMOVE_ONE_PRODUCT:
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id
                    ? action.payload
                    : item
                ),
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
        case TYPES.SET_CART:
            return {
                ...state,
                cart: action.payload
            };
        default:
            return state;
    }
}
