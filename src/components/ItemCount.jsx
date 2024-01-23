import React from 'react'
import { useState, useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'

const ItemCount = ({ agregarAlCarrito, quitarDelCarrito }) => {
    const {cantidad} = useContext(CartContext)
    return (
        <div>
            <Button size="xs" >-</Button>
            <Button >Agregar al carrito {cantidad}</Button>
            <Button size="xs" > + </Button>
        </div>
    )
}

export default ItemCount