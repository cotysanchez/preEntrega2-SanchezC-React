import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import {  Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import {getDocs, collection, query, where, addDoc} from "firebase/firestore";
import { db } from '../../../firebaseConfig';
import CartSkeleton from '../../common/cartSkeleton/CartSkeleton';


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  
  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products")
    let consulta= undefined
    
    if(!categoryName){
      consulta= productsCollection
    }else{
     consulta = query (productsCollection, where ("category", "==", categoryName))
    } 

    getDocs(consulta).then(res=>{
      let newArray= res.docs.map (product =>{
        return {...product.data(), id:product.id}  
      })

      setItems(newArray);
    })
    
  }, [categoryName]);

  return (
    <div>
      {items.length === 0 ? (
        <div>
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
        </div>
      ) : (
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={3} key={item.id}>
              <ItemList items={[item]} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ItemListContainer;
