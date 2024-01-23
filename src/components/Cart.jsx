import React from 'react';
import "../estilos/Cart.css";
import { useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext } from '../context/ShoppingCartContext'

const Cart = () => {
    const { cart, setCart,cantidad } = useContext(CartContext)

    return (
        <div className="ContenedorCarro">
            <div className="carritoModal">
                <div className="carrito-info">
                    <p className="title">Tu carrito</p>
                    <h2>Cantidad de productos: {cantidad}</h2>

                    <Link to={`/Formulario.jsx`}>
                        <button>Confirmar compra</button>
                    </Link>
                    
                </div>
            </div>
        </div >

    )
}

export default Cart