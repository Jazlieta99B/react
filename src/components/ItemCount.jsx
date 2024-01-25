import React from 'react'
import { useContext, useState } from "react"
import { CartContext } from '../context/ShoppingCartContext'
import "../estilos/contador.css"

const ItemCount = ({ id, titulo, precio, item }) => {

    const { carrito, setCarrito } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(0);

    const restarCarrito = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const sumarCarrito = () => {
        cantidad < setCantidad(cantidad + 1)
    }

    const aggCarrito = () => {
        const prodSeleccionado = { id, cantidad, titulo, precio, item }
        const carritoEdit = [...carrito]
        const yaExiste = carritoEdit.find((producto) => producto.id === prodSeleccionado.id)

        if (yaExiste) {
            yaExiste.cantidad = yaExiste.cantidad + cantidad
            setCarrito(carritoEdit)
        } else {
            setCarrito([...carrito, prodSeleccionado])
        }
    }

    return (
        <div>
            <button onClick={restarCarrito} className='contadorIC'>-</button>
            <button onClick={aggCarrito} className='contadorIC'><p>Agregar al carrito {cantidad} </p></button>
            <button onClick={sumarCarrito} className='contadorIC' >+</button>
        </div>
    )
}

export default ItemCount