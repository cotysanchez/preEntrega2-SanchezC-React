import  Badge  from '@mui/material/Badge';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={4} color="primary">
        <LocalMallIcon color="secondary" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
