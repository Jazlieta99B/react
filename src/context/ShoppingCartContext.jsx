import { createContext, useState, useEffect } from "react";
export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const cantidad = carrito.length
    return (
        <CartContext.Provider value={{cantidad}}>
            {children}
        </CartContext.Provider>
    )



}

export default ShoppingCartProvider

// Las funciones aca
// Aca  va el boton del contador
// el cartwidgrt toma la info de aca para mostrar el numero de items en el carrito