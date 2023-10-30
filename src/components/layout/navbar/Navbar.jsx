import { useEffect, useState } from 'react';
import CartWidget from '../../common/cartWidget/CartWidget';
import './navbar.css';
import { Link, Outlet } from 'react-router-dom';
import { db } from '../../../firebaseConfig';
import { collection, getDocs} from "firebase/firestore";





export const Navbar = () => {
  const[ categories, setCategories]= useState([])

  useEffect(() => {
    const categoriesCollection = collection (db, "categories");
    
    getDocs(categoriesCollection)
      .then((res) => {
        let arrayCategories = res.docs.map((category) => {
          return {...category.data(), id: category.id}
        })
      setCategories(arrayCategories)

      });
      //.catch ((err) => console.log (err));
  }, []);


  return (
    <>
      <div className={'containerNavbar'}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dftcprmrq/image/upload/v1696193279/clickcourse65A_iho589.jpg"
            alt="logo click"
          />
        </Link>

        <ul className="categories">
          <Link to="/">
            <li>Cursos</li>
          </Link>
          {categories.map((category) =>(
            <Link key= {category.id} to={category.path}>
              <li>{category.name}</li>
            </Link>

          ))}

        </ul>
        <CartWidget />
      </div>

      
    </>
  );
};
