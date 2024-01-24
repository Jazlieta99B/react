import "../estilos/ItemDetail.css"
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import { useState, useEffect } from "react";
import { getDoc, getFirestore, doc } from "firebase/firestore";

const ItemDetail = ({ items }) => {
    // const { carrito, agregarAlCarrito } = useContext(CartContext);
    // const [cantidad, setCantidad] = useState(1);

    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const product = doc(db, "productos", `${id}`);
        
        getDoc(product).then((snapshot) => {
            if (snapshot.exists()) {
                setItem(snapshot.data());
            }
            else {
                console.log("Error: No se encuentra el producto");
            }
        });
    }, [id]);

    const itemFilter = items.filter((item) => item.id == id);

    return (
        <>
            {itemFilter.map((item) => (
                <div key={item.id}>
                    <div className="contenedorItem">
                        < div className="cardDetalle" >
                            <aside>
                                <p>Hola</p>
                                {item.titulo}
                                {/* <h2>{item.titulo}</h2>
                                 <p>{item.descripcion}</p>
                             <p className='precio'>Precio: ${item.precio}</p> */}
                                <ItemCount
                                    // cantidad={cantidad}
                                    id={item.id}
                                    titulo={item.titulo}
                                    precio={item.precio}
                                    descripcion={item.descripcion}
                                    item={item}
                                />
                            </aside>
                        </div >
                    </div>
                </div>
            ))}
        </>
    )
}

export default ItemDetail