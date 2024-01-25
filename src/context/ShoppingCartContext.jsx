import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    return (
        <CartContext.Provider value={{ carrito, setCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider