import { createContext, useEffect, useReducer } from "react"
import axios from 'axios';
import { TYPES, removeAllProducts, removeOneProduct, setProducts } from "../actions/shoppingActions";
import { shoppingReducer, shoppingInitialState } from "../reducer/shoppingReducer";


export const ViandasContext = createContext();

const ViandasContextProvider = ({ children }) => {

    const [{ cart, products }, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    const deleteFromCart = (id, all = false) => {
        if (all) {
            // dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id })
            dispatch(removeAllProducts(id));
        } else {
            dispatch(removeOneProduct(id));
        }
    }
    const clearCart = (id) => dispatch({ type: TYPES.CLEAR_CART });


    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("http://localhost:3001/viandas");
            // dispatch({ type: TYPES.SET_PRODUCTS, payload: res.datz })
            dispatch(setProducts(res.data));
        }
        getData();
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