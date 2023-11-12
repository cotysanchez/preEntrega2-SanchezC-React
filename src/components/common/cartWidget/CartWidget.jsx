import  Badge  from '@mui/material/Badge';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';


const CartWidget = () => {

  const {getTotalQuantity} = useContext(CartContext)
  
  let total= getTotalQuantity()


  return (
    <Link to="/cart">
      <Badge sx={{marginRight: "10px"}} badgeContent={total} showZero color="primary">
        <LocalMallIcon color="primary-light" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
