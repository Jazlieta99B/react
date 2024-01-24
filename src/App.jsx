import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Loader from "./components/Loader"
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react"
import "./estilos/app.css"
import Formulario from "./components/Formulario"
import ShoppingCartContext from "./context/ShoppingCartContext"
import { CartContext } from "./context/ShoppingCartContext"

const App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <ShoppingCartContext >
        {<NavBar />}
        <Routes>
          <Route exact path="/" element={<ItemListContainer />}> </Route>
          <Route exact path="/categoria/:category" element={<ItemListContainer />}></Route>
          <Route exact path="/producto/:id" element={<ItemDetailContainer />}></Route>
          <Route exact path="/Cart.jsx" element={<Cart />}></Route>
          <Route exact path="/Formulario.jsx" element={<Formulario />}></Route>
        </Routes>
      </ShoppingCartContext>
    </BrowserRouter>
  )
}

export default App