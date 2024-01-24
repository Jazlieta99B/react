import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const ItemCount = ({ agregarAlCarrito, quitarDelCarrito }) => {
    const { cantidad } = useContext(CartContext)
    return (
        <div>
            <button>-</button>
            <button>Agregar al carrito {cantidad}</button>
            <button>+</button>
        </div>
    )
}

export default ItemCount