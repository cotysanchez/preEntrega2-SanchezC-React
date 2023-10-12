import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";


export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={productSelected.img}
            alt={productSelected.title}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">{productSelected.title}</Typography>

          <Typography variant="body1" paddingTop={'10px'}>
            {productSelected.extendedDescription}
          </Typography>
          <Typography variant="h6" paddingTop={'10px'}>
            Precio: U$D {productSelected.price}
          </Typography>
          <Box mt={2}>
            <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
            
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};