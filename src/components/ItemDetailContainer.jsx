import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const{id} = useParams()

  useEffect(() => {
    const db = getFirestore()

    const docProduct = doc(db, "productos", id)
    getDoc(docProduct)
      .then((resp) => {
       setItem({...resp.data(), id: resp.id}
       )
    })
  }, [id])

  return(
    <div> 
      {item && <ItemDetail item={item} />}
    </div>
  )

}
export default ItemDetailContainer