import { useState, useEffect } from "react";
import { products } from "../../../productsMocks";

import ItemList from './ItemList';
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  

  useEffect(() => {
    const productosFiltrados= products.filter(product => product.category === categoryName)
    

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <Grid container spacing={2}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={4} key={item.id}>
          <ItemList items={[item]} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemListContainer;