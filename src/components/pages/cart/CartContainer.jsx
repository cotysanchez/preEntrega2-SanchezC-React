import { Box, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import './cartContainer.css';
import Swal from 'sweetalert2';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';


const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);
  

  let total = getTotalPrice()
  

  const clearCartWithAlert = () => {
    Swal.fire({
      title: '¿Seguro deseas limpiar el carrito?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Sí!',
      denyButtonText: 'No!',
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire('Carrito Eliminado', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('El Carrito quedó como estaba', '', 'warning');
      }
    });
  };

  return (
    <div>
      <h2
        style={{
          marginLeft: '20px',
          color: '#D81B60',
          fontFamily: 'Arial',
          fontWeight: '200',
          marginBottom: '15px',
        }}
      >
        Este es tu Carrito de Compras
      </h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "45px", marginRight: "20px" }}>
        {cart.map((product) => (
          <Card key={product.id} sx={{ maxWidth: 230, margin: '10px' }}>
            <CardMedia
              sx={{ height: 180 }}
              image={product.img}
              title={`image ${product.title}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                U$D {product.price} .-
              </Typography>
              <Typography  sx={{ marginTop: "1.8rem"}}variant="body2">
                Cantidad: {product.quantity}
              </Typography>

              <Typography
                sx={{ marginTop: '0.2rem', fontWeight: 'bold' }}
                variant="body2"
              >
                Total: U$D {product.price * product.quantity}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => deleteProductById(product.id)}>
                <DeleteForeverIcon
                  sx={{
                    color: '#6C3483',
                    transition: 'color 0.3s',
                    '&:hover': {
                      color: '#D81B60',
                    },
                  }}
                />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>

      {cart.length > 0 && (
        <div>
          <h4 style={{marginLeft: "23px"}}>El total a pagar es U$D {total}</h4>
          <Link to="/checkout">
            <Button
              style={{ marginLeft: '50px', marginTop: '15px' }}
              variant="contained"
              size="small"
            >
              Finalizar Compra
            </Button>
          </Link>

          <Button
            style={{ marginLeft: '20px', marginTop: '15px' }}
            variant="outlined"
            size="small"
            onClick={clearCartWithAlert}
          >
            Vaciar Carrito
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
