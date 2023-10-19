import  Badge  from '@mui/material/Badge';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';


const CartWidget = () => {

  const {cart} = useContext(CartContext)

  return (
    <Link to="/cart">
      <Badge badgeContent={cart.length} color="primary">
        <LocalMallIcon color="secondary" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
