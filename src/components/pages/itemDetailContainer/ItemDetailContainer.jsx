import { useContext, useEffect , useState } from "react";
import { products } from "../../../productsMocks";
import {ItemDetail} from "./ItemDetail";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  
  const { id } = useParams();

  const navigate = useNavigate()

  const { addToCart , getQuantityById } = useContext(CartContext)
  let totalQuantity = getQuantityById(+id)
  console.log(totalQuantity)
  
  
  useEffect(() => {
    let producto = products.find((product) => product.id === +id);

    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
      
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let item = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart( item )

    
    navigate("/cart")
  };

  return <ItemDetail productSelected={productSelected} onAdd={onAdd} initial ={totalQuantity}/>;
};

export default ItemDetailContainer;
