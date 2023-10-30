
import  {useContext, useState} from 'react'
import { CartContext } from '../../../context/CartContext';
import { serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { Button, Link } from '@mui/material';




const CheckoutOficial = () => {
    const[userData, setUserData]= useState ({
        name: "",
        phone:"",
        email:"",
    });

    const [orderId, setOrderId] = useState(null)

    const {cart, getTotalPrice, clearCart } = useContext(CartContext)
    
    const total = getTotalPrice()

    const handleChange = (evento) =>{
        setUserData({...userData,[evento.target.name]: evento.target.value})
    };

    const handleSubmit = (evento) =>{
        evento.preventDefault()
        let order = {
            buyer: userData,
            items : cart,
            total,
            date: serverTimestamp()
        }

        const ordersCollection= collection(db, "orders");
        
        addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

        cart.forEach((elemento) =>{
            updateDoc( doc (db, "products", elemento.id) ,{stock: elemento.stock - elemento.quantity,});

    });

    clearCart();


    };



  return (
    <>
      {orderId ? (
        <div>
          <h2>Gracias por tu Compra!! Su identificador de Comprobante es {orderId}</h2>
          <Link to="/">Seguir Comprando</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            style={{
              display: 'flex',
              color: 'crimson',
              fontSize: ' 1rem',
              marginLeft: '15px',
              marginTop: "30px",
            }}
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handleChange}
          />

          <input
            style={{
              display: 'flex',
              color: 'crimson',
              fontSize: ' 1rem',
              marginLeft: '15px',
              marginTop: '5px',
            }}
            type="text"
            placeholder="Telefono"
            name="phone"
            onChange={handleChange}
          />

          <input
            style={{
              display: 'flex',
              color: 'crimson',
              fontSize: ' 1rem',
              marginLeft: '15px',
              marginTop: '5px',
            }}
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <Button type="submit">Comprar</Button>
        </form>
      )}
    </>
  );
}

export default CheckoutOficial