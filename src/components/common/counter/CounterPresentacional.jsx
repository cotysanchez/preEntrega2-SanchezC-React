
import { Button, Typography } from '@mui/material';
import './counter.css'; 

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div>
      <Button
        className="button"
        variant="outlined"
        size="small"
        onClick={sumar}
      >
        Sumar
      </Button>
      <Typography className="text" fontSize={'20px'}>
        {contador}
      </Typography>
      <Button
        className="button subtract-button"
        variant="outlined"
        size="small"
        onClick={restar}
      >
        Restar
      </Button>
      <Button
        className="button add-to-cart-button"
        variant="contained"
        size="small"
        fullWidth
        onClick={() => onAdd(contador)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default CounterPresentacional;
