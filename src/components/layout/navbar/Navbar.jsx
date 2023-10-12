
import CartWidget from '../../common/cartWidget/CartWidget';
import './Navbar.css';
import { Link, Outlet } from 'react-router-dom';

export const Navbar = () => {
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
          <Link to="/category/programacion">
            <li>Programación</li>
          </Link>
          <Link to="/category/musica">
            <li>Música</li>
          </Link>
          <Link to="/category/cocina">
            <li>Cocina</li>
          </Link>
        </ul>
        <CartWidget />
      </div>

      <Outlet />
    </>
  );
};
