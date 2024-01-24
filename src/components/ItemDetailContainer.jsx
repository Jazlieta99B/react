import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "productos")
    getDocs(itemsCollection).then((querysnapshot) => {
      const items = querysnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setItem(items)
    })
  }, [])


  return <ItemDetail items={item} />

}
export default ItemDetailContainer