import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import "../estilos/Form.css"

const Form = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")
    const db = getFirestore()
    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
    }
    const order = {
        nombre,
        email
    }
    const ordersCollection = collection(db, "orden")

    const [mensaje, setMensaje] = useState()
    const orden = () => {
        const nuevoMensaje = `Su orden de compra es: ${orderId}`
        setMensaje(nuevoMensaje)

    }
    return (
        <>
            <div className='form'>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="Nombre">Ingrese su nombre:</label>
                    <input type="text" placeholder='Jazmín' onChange={(e) => setNombre(e.target.value)} value={nombre} /> <br />
                    <label htmlFor="Correo">Ingrese su correo electronico:</label>
                    <input type="text" placeholder='jazmin@email.com' onChange={(e) => setEmail(e.target.value)} value={email} /> <br />
                    <button type='submit' onClick={orden}>Enviar</button>
                </form>
                <p>{mensaje}</p>
            </div>
        </>
    )
}

export default Form