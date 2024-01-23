import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore"

const Collection = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        const db = getFirestore()

        const itemsCollection = collection(db, "productos")

        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data())
            setProducts(docs)
        })
    }, [])

    return (
        <div>
            {
                products.map((p) => (
                    <>
                        <h2>{p.titulo}</h2>
                        <h3>{p.precio}</h3>
                    </>
                ))
            }
        </div>
    )
}

export default Collection