
import { Box, Button, Typography } from '@mui/material';
import './counter.css'; 

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <Box style={{ display: 'flex', marginBottom: '20px', marginTop: '30px' }}>
      <Button
        className="button"
        variant="outlined"
        size="small"
        onClick={sumar}
      >
        +
      </Button>
      <Typography
        className="text"
        fontSize={'20px'}
        style={{ paddingLeft: '10px', paddingRight: '15px' }}
      >
        {contador}
      </Typography>
      <Button
        className="button subtract-button"
        variant="outlined"
        size="small"
        onClick={restar}
      >
        -
      </Button>

      <Box>
        <Button
          style={{ display: 'flex', marginLeft: '15px' }}
          className="button add-to-cart-button"
          variant="contained"
          size="small"
          fullWidth
          onClick={() => onAdd(contador)}
        >
          Agregar al carrito
        </Button>
      </Box>
    </Box>
  );
};

export default CounterPresentacional;
