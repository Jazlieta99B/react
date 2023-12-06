import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import "./estilos/app.css"
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {

  return (
    <main>
      <ChakraProvider />
      <NavBar />
      <ItemListContainer greeting={"Bienvenides a Violet Crochet"} />
    </main>
  )

}
export default App