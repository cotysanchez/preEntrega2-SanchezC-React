import { useState, useEffect } from 'react';

import ItemList from './ItemList';
import { Button, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton'; 
import {getDocs, collection, query, where, addDoc} from "firebase/firestore";
import { db } from '../../../firebaseConfig';


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

      //let arrayFiltrado= newArray.filter((elemento) =>elemento.stock > 0)

      setItems(newArray);
    })
    
  }, [categoryName]);

  return (
    <div>
      {items.length === 0 ? (
        <div style={{ display: 'flex', gap: 20 ,marginLeft: "40px"}}>
          <div>
            <Skeleton variant="rectangular" width={300} height={220} />
            <Skeleton variant="text" width={170} height={50} />
            <Skeleton variant="text" width={120} height={60} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={300} height={220} />
            <Skeleton variant="text" width={170} height={50} />
            <Skeleton variant="text" width={120} height={60} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={300} height={220} />
            <Skeleton variant="text" width={170} height={50} />
            <Skeleton variant="text" width={120} height={60} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={300} height={220} />
            <Skeleton variant="text" width={170} height={50} />
            <Skeleton variant="text" width={120} height={60} />
          </div>
          
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
