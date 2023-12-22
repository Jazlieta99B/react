import React from "react";
import "../estilos/ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const { categoriaId } = useParams()

    const productos = [
        {
            id: "1",
            categoria: "hilos",
            titulo: 'Hilo Violeta',
            descripcion: 'Hilo de color violeta.',
            precio: 1000,
        },
        {
            id: "2",
            categoria: "hilos",
            titulo: 'Hilo Verde',
            descripcion: 'Hilo de color verde.',
            precio: 1000,
        },
        {
            id: "3",
            categoria: "hilos",
            titulo: 'Hilo Celeste',
            descripcion: 'Hilo de color celeste.',
            precio: 1000,
        },
        {
            id: "4",
            categoria: "ganchos",
            titulo: 'Gancho 3MM',
            descripcion: 'Gancho de mango ergonómico de silicona suave, cómodo y fácil de trabajar, de 3MM.',
            precio: 1500,
        },
        {
            id: "5",
            categoria: "ganchos",
            titulo: 'Gancho 1MM',
            descripcion: 'Gancho de mango ergonómico de silicona suave, cómodo y fácil de trabajar, de 1MM.',
            precio: 1500,
        },
        {
            id: "6",
            categoria: "ganchos",
            titulo: 'Gancho 5MM',
            descripcion: 'Gancho de mango ergonómico de silicona suave, cómodo y fácil de trabajar, de 5MM.',
            precio: 1500,
        },
        {
            id: "7",
            categoria: "agujasDeZrcir",
            titulo: 'Aguja de Tejido N2',
            descripcion: 'Agujas para tejido crochet número 2.',
            precio: 500,
        },
        {
            id: "8",
            categoria: "agujasDeZrcir",
            titulo: 'Aguja de Tejido N3',
            descripcion: 'Agujas para tejido crochet número 3.',
            precio: 500,
        },
        {
            id: "9",
            categoria: "agujasDeZrcir",
            titulo: 'Aguja de Tejido N4',
            descripcion: 'Agujas para tejido crochet número 4.',
            precio: 500,
        },
        {
            id: "10",
            categoria: "tijerasCortahilos",
            titulo: 'Tijera',
            descripcion: 'Tijera ergonómica de 5,5".',
            precio: 1000,
        },
        {
            id: "11",
            categoria: "tijerasCortahilos",
            titulo: 'Corta Hilos',
            descripcion: 'Cortador de hilo con tapa.',
            precio: 700,
        },
        {
            id: "12",
            categoria: "MarcadoresDePunto",
            titulo: 'Marcador de punto',
            descripcion: 'Marcador de punto de plástico.',
            precio: 300,
        },
        {
            id: "13",
            categoria: "MarcadoresDePunto",
            titulo: 'Fibra marcador de punto',
            descripcion: 'Marcador fino con tinta que desaparece.',
            precio: 1200,
        },
    ]

    const mostrarProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 3000)
        } else {
            reject("No se obtuvieron productos")
        }
    })

    mostrarProductos
        .then((resultado) => { })
        .catch((error) => {
            console.log(error)
        })

    const productosFiltrados = productos.filter((producto) => producto.categoria == categoriaId)
   
    return (
        <div>
            {
                categoriaId ? <ItemList productos={productosFiltrados} /> : <ItemList productos={productos} />
            }

        </div>
    )

}

export default ItemListContainer