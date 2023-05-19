import { createContext, useEffect, useReducer } from "react"
import { TYPES, removeAllProducts, removeOneProduct, setCart, setProducts } from "../actions/shoppingActions";
import { shoppingReducer, shoppingInitialState } from "../reducer/shoppingReducer";
import { getData, getCart, addItemToCart, deleteCartData } from "../componnents/axiosApp";


export const ViandasContext = createContext();

const ViandasContextProvider = ({ children }) => {

    const [{ cart, products }, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const addToCart = (data) => {
        const itemInCart = cart.find(item => item.id === data.id);

        const itemToAdd = itemInCart
            ? { ...itemInCart, quantity: itemInCart.quantity + 1 }
            : { ...data, quantity: 1 };
        console.log({
            itemToAdd,
            itemToAdd
        })
        addItemToCart(itemToAdd, itemInCart);
        dispatch({ type: TYPES.ADD_TO_CART, payload: { itemInCart, itemToAdd } })
    };

    const deleteFromCart = (id, all = false) => {
        deleteCartData({ id });
        if (all) {
            // dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id })
            dispatch(removeAllProducts(id));
        } else {
            dispatch(removeOneProduct(id));
        }
    }
    const clearCart = (id) => dispatch({ type: TYPES.CLEAR_CART });

    useEffect(() => {
        getData().then(viandas => dispatch(setProducts(viandas)));
        getCart().then(cart => dispatch(setCart(cart)));
    }, []);


    return (
        <ViandasContext.Provider
            value={{
                products: {
                    items: products,
                },
                cart: {
                    items: cart,
                    addToCart,
                    deleteFromCart,
                    clearCart,
                },
            }}>
            {children}
        </ViandasContext.Provider>
    )
}

/* importar ViandasContext y useContext en el componente que lo necesite
y crear const viandas = useContext(ViandasContext) EN EL CARRITO Y EL SHOPPINGCART!!!!!!!!! */

export default ViandasContextProvider