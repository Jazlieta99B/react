import React from 'react';
import ItemCount from './ItemCount'
import "../estilos/ItemDetail.css"
import { useParams } from 'react-router-dom';


const ItemDetail = ({ producto }) => {
    const { id } = useParams()
    const { categoria } = useParams()

    return (
        <div className="contenedorItem">
            < div className="cardDetalle" >
                <h2>
                    <h3>{producto.titulo}</h3>
                    <p>{producto.descripcion}</p>
                    <p className='precio'>Precio: ${producto.precio}</p>
                    <ItemCount />
                </h2>
            </div >
        </div >
    )
}

export default ItemDetail