import { createContext, useContext, useState } from "react"

export const ViandasContext = createContext()

const ViandasContextProvider = ({ children }) => {

    const [viandas, setViandas] = useState([
        { id: 1, name: "Vianda 1", description: " " }
    ])

    return (

        <ViandasContext.Provider value={viandas}>
            {children}
        </ViandasContext.Provider>
    )
}

/* importar ViandasContext y useContext en el componente que lo necesite
y crear const viandas = useContext(ViandasContext) */

export default ViandasContextProvider