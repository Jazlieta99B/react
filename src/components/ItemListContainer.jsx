import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const productosCollection = collection(db, "productos")
        getDocs(productosCollection).then((resp) => {
            setProductos(resp.docs.map((doc) => {
                return {
                    ...doc.data(), id: doc.id
                }
            }))
        })
    }, [])

    const catFilter = productos.filter((productos) => productos.categoria === category)
    
    
    return (
        <div>
            {category ? <ItemList productos={catFilter} /> : <ItemList productos={productos} />}
        </div>
    )
}

export default ItemListContainer