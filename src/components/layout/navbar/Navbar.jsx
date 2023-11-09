import { useEffect, useState } from 'react';
import CartWidget from '../../common/cartWidget/CartWidget';
import './navbar.css';
import { Link, Outlet } from 'react-router-dom';
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Hidden from '@mui/material/Hidden'; 
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; 

export const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const categoriesCollection = collection(db, 'categories');

    getDocs(categoriesCollection).then((res) => {
      let arrayCategories = res.docs.map((category) => {
        return { ...category.data(), id: category.id };
      });
      setCategories(arrayCategories);
    });
  }, []);

  
  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className={'containerNavbar'}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dftcprmrq/image/upload/v1696193279/clickcourse65A_iho589.jpg"
            alt="logo click"
          />
        </Link>

        <Hidden mdUp>
          <IconButton
            sx={{
              color: '#6C3483',
              transition: 'color 0.3s',
              '&:hover': {
                color: '#D81B60',
              },
            }}
            aria-label="Abrir menú"
            edge="start"
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          {mobileMenuOpen && (
            <ul className="mobile-categories">
              <Link to="/">
                <li>Cursos</li>
              </Link>
              {categories.map((category) => (
                <Link key={category.id} to={category.path}>
                  <li>{category.name}</li>
                </Link>
              ))}
            </ul>
          )}
        </Hidden>

        <Hidden smDown>
          <ul className="categories">
            <Link to="/">
              <li>Cursos</li>
            </Link>
            {categories.map((category) => (
              <Link key={category.id} to={category.path}>
                <li>{category.name}</li>
              </Link>
            ))}
          </ul>
        </Hidden>

        <CartWidget />
      </div>
    </>
  );
};
