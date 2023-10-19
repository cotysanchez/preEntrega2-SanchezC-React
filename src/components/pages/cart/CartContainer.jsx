import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import "./cartContainer.css";

const CartContainer = () => {
  
  const {cart} = useContext(CartContext)
  
  return (
    <div>
      <h2 style={{marginLeft: '20px',
          color: '#D81B60',
          fontFamily: 'Arial',
          fontWeight: '200',
          marginBottom: '15px',}}>Este es tu Carrito de Compras</h2>

      {cart.map((product) => (
        <div key={product.id}>
          <h3> {product.title}</h3>
          <h3> cantidad: {product.quantity}</h3>
        </div>
      ))}

      <Link to="/checkout">
        <Button 
        style={{marginLeft:"20px", marginTop: "15px"}}
        variant="contained" size= "small">Finalizar Compra</Button>
      </Link>
    </div>
  );
}

export default CartContainer