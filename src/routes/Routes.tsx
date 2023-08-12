import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useAuth } from '../hooks/useAuth';
import HomePage from '../pages/Home/Home';
import PrivateRoute from './RoutesPrivate';
import Product from '../pages/Product/Product';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <div>olá</div>}
        />
        <Route path="/produto" element={<Product />} />


        <Route>
          <Route path="/dashboard" element={<HomePage />} />
        </Route>
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default AppRoutes;
