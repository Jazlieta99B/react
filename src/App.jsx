import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./estilos/app.css"


const App = () => {

  return (
    <BrowserRouter>
      {<ChakraProvider />}
      {<NavBar />}

      <Routes>
        <Route exact path="/" element={<ItemListContainer />}> </Route>
        <Route exact path="/categoria/:categoriaId" element={<ItemListContainer />}></Route>
        <Route exact path="/producto/:productoId" element={<ItemDetailContainer />}></Route>
      </Routes>
    </BrowserRouter>
  )

}
export default App