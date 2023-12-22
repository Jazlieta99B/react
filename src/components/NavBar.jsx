import CartWidget from "./CartWidget"
import "../estilos/NavBar.css"
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from "react-router-dom"

const NavBar = () => {
    let nombreMarca = "Violet Crochet"
    return (
        <header>
            <Box w='100%' p={4}>
                <Link to={"/"}>
                    <h1>{nombreMarca}</h1>
                </Link>
            </Box>

            <Flex>
                <Box p='4' >
                    <Menu>
                        <MenuButton>
                            <p className="bt">Productos</p>
                        </MenuButton>
                        <MenuList className="bt">
                            <Link to={"/categoria/hilos"}><MenuItem color="#f46278">Hilos</MenuItem></Link>
                            <Link to={"/categoria/ganchos"}><MenuItem color="#f46278">Ganchos</MenuItem></Link>
                            <Link to={"/categoria/agujasDeZrcir"}><MenuItem color="#f46278">Aguja de zurcir</MenuItem></Link>
                            <Link to={"/categoria/tijerasCortahilos"}><MenuItem color="#f46278">Tijeras y cortahilos</MenuItem></Link>
                            <Link to={"/categoria/MarcadoresDePunto"}><MenuItem color="#f46278">Marcadores de punto</MenuItem></Link>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4'>
                    <div><CartWidget /></div>
                </Box>
            </Flex>

        </header>
    )
}

export default NavBar