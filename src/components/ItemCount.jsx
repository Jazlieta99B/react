import React from 'react'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'

const ItemCount = () => {
    const [contador, setContador] = useState(0)

    return (
        <div>
            <Button size="xs" onClick={() => setContador(contador - 1)}>-</Button>
            <Button>Agregar al carrito {contador}</Button>
            <Button size="xs" onClick={() => setContador(contador + 1)}> + </Button>
        </div>
    )
}

export default ItemCount