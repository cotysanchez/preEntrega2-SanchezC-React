
import  {useContext, useState} from 'react'
import { CartContext } from '../../../context/CartContext';
import { serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

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
        <Card sx={{ maxWidth: 1200, minWidth: 180, marginLeft: "40px", marginTop: "45px" }}>
          <CardContent>
            <Typography variant="h2" style={{fontSize: "30px"}}>¡Gracias por Tu Compra!</Typography>
            <Typography
              variant="body1"
              style={{ marginLeft: '35px', marginBottom: '25px', marginTop: "20px", fontStyle: "oblique" }}>
              Su identificador de Comprobante es: {orderId}</Typography>
          
          <Link to="/" size="small" style={{marginLeft:"35px"}}>Seguir Comprando</Link>
          
          </CardContent>
        </Card>


      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            style={{
              display: 'flex',
              color: 'crimson',
              fontSize: ' 1rem',
              marginLeft: '20px',
              marginTop: '30px',
            }}
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handleChange}
          />

          <TextField
            style={{
              display: 'flex',
              color: 'crimson',
              fontSize: ' 1rem',
              marginLeft: '20px',
              marginTop: '5px',
            }}
            type="text"
            placeholder="Telefono"
            name="phone"
            onChange={handleChange}
          />

          <TextField
            style={{
              display: 'flex',
              color: 'crimson',
              fontSize: ' 1rem',
              marginLeft: '20px',
              marginTop: '5px',
            }}
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            size="small"
            style={{ marginLeft: '20px', marginTop: '15px' }}
          >
            Comprar
          </Button>
        </form>
      )}
    </>
  );
}

export default CheckoutOficial