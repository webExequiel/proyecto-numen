import { createContext, useContext, useState } from "react"
import axios from 'axios';


export const ViandasContext = createContext();

const ViandasContextProvider = ({ children }) => {

    const [viandas, setViandas] = useState([]);

    const [vianda2, setVianda2] = useState();

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("http://localhost:3001/viandas");

            setViandas(res.data);
        }
        getData()
    }, []);


    return (

        <ViandasContext.Provider value={viandas}>
            {children}
        </ViandasContext.Provider>
    )
}

/* importar ViandasContext y useContext en el componente que lo necesite
y crear const viandas = useContext(ViandasContext) EN EL CARRITO Y EL SHOPPINGCART!!!!!!!!! */

export default ViandasContextProvider