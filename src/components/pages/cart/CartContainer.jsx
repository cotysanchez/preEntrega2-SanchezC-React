import { Button } from "@mui/material"
import { Link } from "react-router-dom"


const CartContainer = () => {
  return (
    <div>
        <h2>Este es el Carrito</h2>
        <Link to="/checkout">
          <Button variant="contained">Finalizar Compra</Button>
        </Link>

    </div>
  )
}

export default CartContainer