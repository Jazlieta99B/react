import React from 'react';
import "../estilos/Cart.css";
import { useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext } from '../context/ShoppingCartContext'

const Cart = () => {
    const { carrito } = useContext(CartContext)

    return (
        <div className="ContenedorCarro">
            <p className="title">Tu carrito</p>

            {
                carrito.map((prod) => (
                    <div key={prod.id} className='contenedorProd'>
                        <br />
                        <p className='nombreProducto'>{prod.titulo}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <p>Precio: ${prod.precio * prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }
            
            <div  className='contenedorBotones'>
            <Link to={`/Formulario.jsx`}>
                <button className='boton'>Confirmar compra</button>
            </Link>
            <Link to={`/`}>
                <button className='boton'>Seguir comprando</button>
            </Link>
            </div>
        </div>


    )
}

export default Cart