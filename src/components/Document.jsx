import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from 'react-router-dom'


const Document = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const oneItem = doc(db, "productos", `${id}`)
        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()) {
                const doc = snapshot.data()
                setProduct(doc)
            }
        })
    }, [])
console.log(product)
    return (
        <div>
            Producto:{product.titulo}
            Precio:{product.precio}
        </div>
    )
}

export default Document