import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CartContext } from '../../../context/CartContext';
import { useContext, useState , useEffect} from 'react';
import { serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import{collection, addDoc, updateDoc, doc} from "firebase/firestore";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";


const CheckoutFormik = () => {

  const {cart, getTotalPrice, clearCart}= useContext(CartContext);
  const total = getTotalPrice();

  const [orderId, setOrderId] = useState(null);



  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: '',
      telefono: '',
      email: '',
      repetEmail: '',
    },
    onSubmit: (data) => {
      let order= {
        buyer: {data},
        items: cart,
        total,
        date: serverTimestamp(),
      }

      const ordersCollection = collection (db, "orders")
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((elemento) =>{ 
      updateDoc(doc(db, "products", elemento.id),{
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
      
    },
    //validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required('Este campo es obligatorio')
        .min(5, 'Debe tener al menos 5 letras')
        .max(20, 'Debe tener máximo 20 caracteres'),
      telefono: Yup.string().required('El campo solo permite numeros'),
      email: Yup.string()
        .email('El correo no parece válido, debe contener @')
        .required('El campo es obligatorio'),
      
      repetEmail: Yup.string()
        .required('Este campo es obligatorio')
        .oneOf([Yup.ref('email')], 'El correo no coincide'),
    }),
  });





  return (
    <>
      {orderId ? (
        <Card
          sx={{
            maxWidth: 1280,
            minWidth: 180,
            marginLeft: '40px',
            marginTop: '45px',
          }}
        >
          <CardContent>
            <Typography variant="h2" style={{ fontSize: '30px' }}>
              ¡Gracias por Tu Compra!
            </Typography>
            <Typography
              variant="body1"
              style={{
                marginLeft: '35px',
                marginBottom: '25px',
                marginTop: '20px',
                marginRight: '20px',
                fontStyle: 'oblique',
              }}
            >
              Su identificador de Comprobante es: {orderId}
            </Typography>

            <Link to="/" size="small" style={{ marginLeft: '35px' }}>
              Seguir Comprando
            </Link>
          </CardContent>
        </Card>

        
      ) : (
        <div style={{ padding: '50px' }}>
          <form onSubmit={handleSubmit}>
            <TextField
              style={{ display: 'flex', marginTop: '5px' }}
              label="Nombre"
              variant="outlined"
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
            <TextField
              style={{ display: 'flex', marginTop: '5px' }}
              label="Telefono"
              variant="outlined"
              name="telefono"
              onChange={handleChange}
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
            <TextField
              style={{ display: 'flex', marginTop: '5px' }}
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />

            <TextField
              style={{ display: 'flex', marginTop: '5px' }}
              label="Repetir Email"
              variant="outlined"
              name="repetEmail"
              onChange={handleChange}
              error={errors.repetEmail ? true : false}
              helperText={errors.repetEmail}
            />

            <Button
              style={{ marginTop: '10px' }}
              variant="contained"
              type="submit"
            >
              Comprar
            </Button>
            <Link to="/" size="small" style={{ marginLeft: '15px' }}>
              <Button
                sx={{ marginTop: '10px' }}
                variant={'outlined'}
                type="button"
              >
                Volver a la tienda
              </Button>
            </Link>
          </form>
        </div>
      )}
    </>
  );
};

export default CheckoutFormik;
