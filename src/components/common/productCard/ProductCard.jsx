import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 170 }}
        image={item.img}
        title={`image ${item.title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {item.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          u$D {item.price} .-
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          sx={{
            color: '#6C3483',
            transition: 'color 0.3s',
            '&:hover': {
              color: '#D81B60',
            },
          }}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton
          sx={{
            color: '#6C3483',
            transition: 'color 0.3s',
            '&:hover': {
              color: '#D81B60',
            },
          }}
          aria-label="share"
        >
          <ShareIcon />
        </IconButton>

        <Link to={`/itemDetail/${item.id}`}>
          <Button variant="outlined" sx={{ size: 'small', marginLeft: '4rem' }}>
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
