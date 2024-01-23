import React from 'react';
import "../estilos/ItemDetail.css"
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import { useState, useEffect, useContext } from "react";
import { collection, getDoc, getFirestore } from "firebase/firestore";
import { CartContext } from '../context/ShoppingCartContext';

const ItemDetail = ({ item }) => {
    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
        <>
            <div className="contenedorItem">
                < div className="cardDetalle" >
                    <aside>
                        <h2>{item.titulo}</h2>
                        <p>{item.descripcion}</p>
                        <p className='precio'>Precio: ${item.precio}</p>
                        <ItemCount
                            cantidad={cantidad}
                        />
                    </aside>
                </div >
            </div >

        </>
    )
}

export default ItemDetail