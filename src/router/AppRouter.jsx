
import { Route, Routes } from 'react-router-dom';
import { routes } from "./menuRoutes";


const AppRouter = () => {
  return (
    <Routes>
      <Route>
        {routes.map(({ id, path, Element }) => {
          return <Route key={id} path={path} element={<Element />} />;
        })}
      </Route>

      
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default AppRouter

