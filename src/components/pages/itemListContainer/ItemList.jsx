
import { Box } from '@mui/material';
import ProductCard from '../../common/productCard/ProductCard';

const ItemList = ({ items }) => {
  return (
    <Box component={"section"} style={{ display: 'flex', justifyContent: 'space-evenly', gap: "1rem", marginLeft: "5px" }}>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </Box >
  );
};

export default ItemList;
