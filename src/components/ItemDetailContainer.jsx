import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
  const id  = useParams().id;
  const [item, setItem] = useState(null)

  useEffect(() => {
    const db = getFirestore()
    const item = doc(db, "productos", "id");

    getDoc(item).then((resp) => {
    setItem(
      { ...resp.data(), id:resp.id })  
    })
  }, [id])

    return (
      <div>
        {item && <ItemDetail item={item} />}
      </div>
    )
  }
export default ItemDetailContainer


// document -> ItemDetailContainer
// collection -> itemlistcontainer