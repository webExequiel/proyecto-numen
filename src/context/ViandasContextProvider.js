import { createContext, useEffect, useReducer } from "react"
import { TYPES, removeAllProducts, removeOneProduct, setCart, setProducts } from "../actions/shoppingActions";
import { shoppingReducer, shoppingInitialState } from "../reducer/shoppingReducer";
import { getData, getCart, addItemToCart, updateCartData, deleteCartData } from "../componnents/axiosApp";


export const ViandasContext = createContext();

const ViandasContextProvider = ({ children }) => {

    const [{ cart, products }, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const addToCart = async (data) => {
        const itemInCart = cart.find(item => item.id === data.id);

        const itemToAdd = itemInCart
            ? { ...itemInCart, quantity: itemInCart.quantity + 1 }
            : { ...data, quantity: 1 };

        if (itemInCart) {
            await updateCartData(itemToAdd)
        } else {
            await addItemToCart(itemToAdd);
        }
        dispatch({ type: TYPES.ADD_TO_CART, payload: { itemInCart, itemToAdd } })
    };

    const deleteFromCart = async (id, all = false) => {
        const itemToDelete = cart.find(item => item.id === id);

        if (all || itemToDelete.quantity === 1) {
            const isDeleteData = window.confirm(
                `Estas seguro que queres eliminar la vianda ${itemToDelete.name}`
            );

            if (isDeleteData) {
                await deleteCartData(itemToDelete);
                dispatch(removeAllProducts(id));
            }

        } else {
            const newItem = { ...itemToDelete, quantity: itemToDelete.quantity - 1 };
            await updateCartData(newItem);
            dispatch(removeOneProduct(newItem));
        }
    };

    const clearCart = async () => {
        const deletePromises = cart.map(item => deleteCartData(item));

        await Promise.all(deletePromises);

        dispatch({ type: TYPES.CLEAR_CART });
    }

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