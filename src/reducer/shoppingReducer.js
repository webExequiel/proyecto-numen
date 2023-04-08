import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
    products: [
          {id: 1, name:"Barra de Cereal", price: 180},
          {id: 2, name: "Burger Pan Negro", price: 850},
          {id: 3, name: "Samosas", price: 380},
          {id: 4, name:"Ensalada Frutas", price: 480},
          {id: 5, name:"Grillados Veganos", price: 580},
          {id: 6, name:"Batidos Veganos", price: 480},
          {id: 7, name: "Variedad de pastas con diferentes salsas veganas", price: 800},
          {id: 8, name: "Pizza de pimientos morrones, cebolla y hongos", price: 880},
          {id: 9, name:"Wrap de Espelta rellenos de Arroz, Coliflor al Curry y Tofu", price: 780},
          {id: 10, name:"Hamburgesas veganas de lentejas y verduras", price: 480}
         ],
  
     cart: [],
  
  };
  
  export function shoppingReducer (state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            const newItem = state.products.find(product => product.id === action.payload);

            const itemInCart = state.cart.find(item => item.id === newItem.id);

            return itemInCart
        ? {
            ...state,
            cart:state.cart.map ((item)=> item.id === newItem.id
                ? {...item, quantity: item.quantity+1 }
                : item
            ),
        }
        : {
            ...state,
            cart: [...state.cart, {...newItem, quantity: 1}]
        };
    };

        case TYPES.REMOVE_ONE_PRODUCT:{
        const itemToDelete = state.cart.find (item => item.id === action.payload);
        
            return itemToDelete.quantity > 1
        ? {
            ...state,
            cart:state.cart.map((item)=>item.id === itemToDelete.id
                ? {...item,quantity:item.quantity -1}
                :item
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
            cart:state.cart.filter(item => item.id !==action.payload)};

    case TYPES.CLEAR_CART:
        return shoppingInitialState;
    ;

    default:
        return state;
    }
}
