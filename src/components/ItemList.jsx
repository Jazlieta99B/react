import React from "react";
import Item from "./Item";
import "../estilos/style.css"


const ItemList = ({ productos }) => {
    return (
        <div className="contenedorItem">
            {
                productos.map((p) => {
                    return (
                        <Item
                            key={p.id}
                            titulo={p.titulo}
                            precio={p.precio}
                            descripcion={p.descripcion}
                            categoria={p.categoria}
                            id={p.id}
                            img={p.img}
                        />
                    )
                })
            }
        </div>
    )
}
export default React.memo(ItemList)