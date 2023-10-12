import { useEffect , useState } from "react";
import { products } from "../../../productsMocks";
import {ItemDetail} from "./ItemDetail";
import { useNavigate, useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  
  const { id } = useParams();

  const navigate = useNavigate()

  useEffect(() => {
    let producto = products.find(
      (product) => product.id === +id);

    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
      // reject("error");
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let obj = {
      ...productSelected,
      quantity: cantidad,
    };
    console.log('este es el producto que se agrega', obj);
    navigate("/cart")
  };

  return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailContainer;