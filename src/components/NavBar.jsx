import CartWidget from "./CartWidget"
import "../estilos/NavBar.css"
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const NavBar = () => {
    let nombreMarca = "Violet Crochet"
    return (
        <header>
            <Box w='100%' p={4}>
                <h1>{nombreMarca}</h1>
            </Box>

            <Flex>
                <Box p='4' >
                    <Menu>
                        <MenuButton>
                            <p className="bt">Productos</p>
                        </MenuButton>
                        <MenuList className="bt">
                            <MenuItem color="#f46278">Hilos</MenuItem>
                            <MenuItem color="#f46278">Ganchos</MenuItem>
                            <MenuItem color="#f46278">Aguja de zurcir</MenuItem>
                            <MenuItem color="#f46278">Tijeras y cortahilos</MenuItem>
                            <MenuItem color="#f46278">Marcadores de punto</MenuItem>
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