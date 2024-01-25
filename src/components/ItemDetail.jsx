import "../estilos/ItemDetail.css"
import ItemCount from '../components/ItemCount';


const ItemDetail = ({ item }) => {

    return (
        <>
            <div key={item.id}>
                <div className="contenedorItem">
                    < div className="cardDetalle" >
                        <aside>
                            <img src={item.img} alt={item.descripcion} />
                            <h2>{item.titulo}</h2>
                            <p>{item.descripcion}</p>
                            <p className='precio'>Precio: ${item.precio}</p>
                            <ItemCount
                                id={item.id}
                                titulo={item.titulo}
                                precio={item.precio}
                                descripcion={item.descripcion}
                                item={item}
                                img={item.img}
                            />
                        </aside>
                    </div >
                </div>
            </div>
        </>
    )
}

export default ItemDetail