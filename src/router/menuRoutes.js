import CartContainer from "../components/pages/cart/CartContainer";
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer"; 
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer";
import CheckoutFormik from "../components/pages/checkoutFormik/CheckoutFormik";


export const routes = [
  {
    id: 'home',
    path: '/',
    Element: ItemListContainer,
  },

  {
    id: 'category',
    path: '/category/:categoryName',
    Element: ItemListContainer,
  },

  {
    id: 'cart',
    path: '/cart',
    Element: CartContainer,
  },

  {
    id: 'detalle',
    path: '/itemDetail/:id',
    Element: ItemDetailContainer,
  },

  {
    id: 'checkout',
    path: '/checkout',
    Element: CheckoutFormik,
  },

 
];

