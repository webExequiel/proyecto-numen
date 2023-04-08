import { TYPES } from "./shoppingActions";

export 
    const addToCart = (id) =>{
    console.log(id)
    dispatch({type:TYPES.ADD_TO_CART,payload:id})};

    const deleteFromCart = (id, all = false) => {
        console.log(id,all)
        if(all){
        dispatch ({type: TYPES.REMOVE_ALL_PRODUCTS, payload:id})
        } else {
            dispatch ({type: TYPES.REMOVE_ONE_PRODUCT, payload:id})}
        };
   
    const clearCart = () => {
        dispatch ({type: TYPES.CLEAR_CART})};

export function shoppingReducer (state, action) {
    switch (action.type) {
                case TYPES.ADD_TO_CART: {
                    let newItem = state.products.find(product => product.id === action.payload);
                    console.log(newItem);
                    let itemInCart = state.cart.find((item) => item.id === newItem.id);
        
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
                        cart: [...state.cart, {...newItem, quantity: 1},]
                    };
                };
    
                case TYPES.REMOVE_ONE_PRODUCT:{
                    let itemToDelete = state.cart.find ((item) => item.id === action.payload);
                    
                    return itemToDelete.quantity > 1
                    ? {
                        ...state,
                        cart:state.cart.map((item)=>item.id === action.payload
                        ? {...item,quantity:item.quantity -1}
                        :item
                        ),
                    }
                    : {
                        ...state,
                        cart: state.cart.filter(item => item.id !==action.payload)
                    };

                };
                case TYPES.REMOVE_ALL_PRODUCTS:{
                    return {
                        ...state,
                        cart:state.cart.filter(item => item.id !==action.payload)
                    };
                }
                case TYPES.CLEAR_CART:{
                    return shoppingInitialState;
                }

               /* case TYPES.TOTAL_AMOUNT:{
                    const { id, cantidad } = action.payload;
                    const total = state.products.find((p) => p.id === id);
                        total.quantity = quantity;
                    return {
                        ...state,
                        productos: [...state.productos],
                        total:
                          state.total +
                          (quantity - product.quantity) * product.price,
                      };
                  
                    };*/
            
                default:
                    return state;
                }};

            
